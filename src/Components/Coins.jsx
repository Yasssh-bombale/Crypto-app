import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { server } from '..';
import Loader from './Loader';
import CoinCard from './CoinCard';
import Error from './Error';
const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState('inr');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const changePage = page => {
    setPage(page);
    setLoading(true);
  };

  const currencySymbol =
    currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        console.log(data);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  const btns = new Array(132).fill(1);

  if (error) return <Error msg={`Error while fetching coins !`} />;

  return (
    <Container maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup p={'4'} value={currency} onChange={setCurrency}>
            <HStack spacing={'4'}>
              <Radio value="inr">INR</Radio>
              <Radio value="usd">USD</Radio>
              <Radio value="eur">EUR</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {coins.map(i => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                img={i.image}
                symbol={i.symbol}
                price={i.current_price}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w={'full'} p={'6'} m={'4'} overflowX={'auto'} spacing={'4'}>
            {btns.map((item, index) => (
              <Button
                bgColor={'blackAlpha.900'}
                color={'white'}
                variant={'unstyled'}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
