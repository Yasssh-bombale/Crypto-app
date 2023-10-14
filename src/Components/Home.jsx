import { Box, HStack, Heading, Image } from '@chakra-ui/react';
import React from 'react';

import img1 from '../assets/1.jpg';

const Home = () => {
  return (
    <Box width={'full'} bgColor={'#E1E1E1'} height={'85vh'}>
      <HStack border={'1px solid'} width={'full'}>
        <Image
          border={'1px solid'}
          position={'absolute'}
          top={['35%', '20%']}
          left={['0', '8%']}
          src={img1}
          w={['170', '450']}
          h={['170', '450']}
          objectFit={'contain'}
        />
        <Heading>Hey..! Roy </Heading>
      </HStack>
    </Box>
  );
};

export default Home;
