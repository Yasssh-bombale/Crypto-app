import { Box, Container } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { server } from '..';
import Loader from './Loader';
import Error from './Error';
const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();

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
            yashu
          </Box>
        </>
      )}
    </Container>
  );
};

export default CoinDetails;
