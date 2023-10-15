import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import avtr from '../assets/y1.jpg';
const Footer = () => {
  return (
    <Box minH={'48'} px={'16'} py={['16', '8']} boxShadow={'dark-lg'}>
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <VStack width={'full'} alignItems={['center', 'flex-start']}>
          <Text fontWeight={'bold'}>About Us</Text>
          <Text
            fontSize={'sm'}
            letterSpacing={'widest'}
            textAlign={['center', 'left']}
          >
            We are the best cypto currency app{' '}
          </Text>
        </VStack>
        <VStack>
          <Avatar boxSize={'28'} mt={['4', '0']} src={avtr} />
          <Text fontWeight={'bold'}>Our Founder</Text>
          <Text
            width={'full'}
            fontFamily={'Great Vibes'}
            fontSize={'1xl'}
            textAlign={'center'}
            fontWeight={'bold'}
          >
            Y V Bombale
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
