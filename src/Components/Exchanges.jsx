import { Container, HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '..';
import ExchangeCard from './ExchangeCard';
import Loader from './Loader';
import Error from './Error';

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges?per_page=250`);
        console.log(data);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error) return <Error msg={`Error while fetching exchanges !`} />;

  return (
    <Container maxW={'container.xl'} p={'4'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {exchanges.map(i => (
              <ExchangeCard
                key={i.id}
                url={i.url}
                img={i.image}
                name={i.name}
                rank={i.trust_score_rank}
                country={i.country}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;
