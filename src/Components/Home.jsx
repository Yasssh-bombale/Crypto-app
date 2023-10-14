import { Box, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';

import img1 from '../assets/1.jpg';
import img2 from '../assets/ss2.png';
import img3 from '../assets/ss3.png';
const Home = () => {
  return (
    <Box width={'full'} bgColor={'#E1E1E1'} height={'85vh'}>
      <HStack border={'1px solid'} width={'full'} p={'16'}>
        <motion.div
          animate={{
            translateY: '25px',
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Image
            border={'1px solid'}
            src={img1}
            w={'450'}
            h={'450'}
            mr={'20'}
            objectFit={'contain'}
          />
        </motion.div>
        <VStack border={'1px solid'}>
          <Heading
            border={'1px solid'}
            w={'full'}
            p={'4'}
            size={'xl'}
            textAlign={'center'}
            color={'#883AA8'}
            fontFamily={'Poppins'}
            fontWeight={'medium'}
          >
            Hey..! Roy , Experience The New Crypto World !!
          </Heading>
          <Text
            width={'full'}
            p={'4'}
            border={'1px solid'}
            textAlign={'center'}
            fontFamily={'cursive'}
            fontSize={'2xl'}
          >
            One of the best platform to Begin your Crypto journey.
          </Text>
          <HStack spacing={'8'} width={'full'}>
            <Image
              alignSelf={'flex-start'}
              ml={'4'}
              src={img2}
              w={'200'}
              h={'200'}
              borderRadius={'lg'}
              shadow={'dark-lg'}
              objectFit={'contain'}
              my={'4'}
              transition={'all 0.4s'}
              css={{
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            />
            <Image
              src={img3}
              w={'200'}
              h={'200'}
              borderRadius={'lg'}
              shadow={'dark-lg'}
              objectFit={'contain'}
              transition={'all 0.4s'}
              css={{
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            />
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Home;
