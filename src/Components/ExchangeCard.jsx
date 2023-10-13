import { Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const ExchangeCard = ({ name, img, rank, url, country }) => {
  return (
    <a href={url} target="blank">
      <VStack
        w={'52'}
        m={'4'}
        shadow={'lg'}
        border={'1px solid'}
        borderRadius={'lg'}
        p={'4'}
        transition={'all 0.3s'}
        css={{
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <Image
          src={img}
          w={'10'}
          h={'10'}
          objectFit={'cover'}
          alt={'exchanges'}
        />
        <Heading size={'md'}>{rank}</Heading>
        <Text noOfLines={'1'}>{name}</Text>
        <Text noOfLines={1}>{`Country : ${country}`}</Text>
      </VStack>
    </a>
  );
};

export default ExchangeCard;
