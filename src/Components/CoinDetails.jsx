import {
  Badge,
  Box,
  Container,
  HStack,
  Image,
  Progress,
  Radio,
  RadioGroup,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { server } from '..';
import Loader from './Loader';
import Error from './Error';
import { Chart } from 'chart.js';

const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState('inr');

  const params = useParams();

  const currencySymbol =
    currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        console.log(data);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [params.id]);

  if (error) return <Error msg={`Error while fetching an Coin Details !`} />;

  return (
    <Container border={'1px solid'} h={'10'} maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box w={'full'} borderWidth={1} h={'5'}>
            <Chart currency={currencySymbol} />
          </Box>

          <RadioGroup value={currency} p={'8'} onChange={setCurrency}>
            <HStack spacing={'4'}>
              <Radio value={'inr'}>INR</Radio>
              <Radio value={'usd'}>USD</Radio>
              <Radio value={'eur'}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <VStack
            spacing={'4'}
            border={'1px solid'}
            p={'16'}
            alignItems={'flex-start'}
          >
            <Text fontSize={'sm'} alignSelf={'center'} opacity={'0.7'}>
              {/* .split('G') is dividing an array till G to [0] index and after the letter G all letters are going to index [1] */}
              Last updated on{' '}
              {Date(coin.market_data.last_updated).split('G')[0]}{' '}
            </Text>
            <Image
              src={coin.image.large}
              w={'16'}
              h={'16'}
              objectFit={'contain'}
            />
            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {currencySymbol} {coin.market_data.current_price[currency]}
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data.price_change_percentage_24h > 0
                      ? 'increase'
                      : 'decrease'
                  }
                />
                {coin.market_data.price_change_percentage_24h} %
              </StatHelpText>
            </Stat>
            <Badge
              fontSize={'2xl'}
              bgColor={'blackAlpha.900'}
              color={'white'}
            >{`#${coin.market_cap_rank}`}</Badge>

            <CustomBar
              high={`${currencySymbol} ${coin.market_data.high_24h[currency]}`}
              low={`${currencySymbol} ${coin.market_data.low_24h[currency]}`}
            />
            <Box w={'full'} border={'1px solid'} p={'4'}>
              <Item title={`Max Supply`} value={coin.market_data.max_supply} />
              <Item
                title={`Circulating Supply`}
                value={coin.market_data.circulating_supply}
              />
              <Item
                title={`Market Capital`}
                value={`${currencySymbol} ${coin.market_data.market_cap[currency]}`}
              />
              <Item
                title={`All time low`}
                value={`${currencySymbol} ${coin.market_data.atl[currency]}`}
              />
              <Item
                title={`All time high`}
                value={`${currencySymbol} ${coin.market_data.ath[currency]}`}
              />
            </Box>
          </VStack>
        </>
      )}
    </Container>
  );
};

const Item = ({ title, value }) => {
  return (
    <HStack w={'full'} my={'4'} justifyContent={'space-between'}>
      <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'}>
        {title}
      </Text>
      <Text>{value}</Text>
    </HStack>
  );
};

const CustomBar = ({ high, low }) => {
  return (
    <VStack w={'full'}>
      <Progress value={50} colorScheme="teal" width={'full'} />
      <HStack justifyContent={'space-between'} w={'full'}>
        <Badge children={low} colorScheme="red" />
        <Text>24H Range</Text>
        <Badge children={high} colorScheme="green" />
      </HStack>
    </VStack>
  );
};

export default CoinDetails;
