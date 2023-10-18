import { Box, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';

import img1 from '../assets/1.jpg';
import img2 from '../assets/ss2.png';
import img3 from '../assets/ss3.png';
import { context, server1 } from '..';
import axios from 'axios';
const Home = () => {
  // console.log(user.name);
  const { user, setUser, setisAuthenticated, isAuthenticated } =
    useContext(context);

  useEffect(() => {
    axios
      .get(`${server1}/user/me`, {
        withCredentials: true,
      })
      .then(res => {
        setUser(res.data.user);
        // console.log(res.data.user.name);
        setisAuthenticated(true);
      })
      .catch(error => {
        setUser({});
        setisAuthenticated(false);
      });
  }, []);

  return (
    <Box width={'full'} bgColor={'#E1E1E1'} minH={['110vh', '90vh']}>
      <Stack
        // border={'1px solid'}
        width={'full'}
        direction={['column', 'row']}
        wrap={'wrap'}
        p={['4', '16']}
      >
        <motion.div
          style={{
            // border: '1px solid black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
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
            // border={'1px solid'}
            src={img1}
            w={['200', '450']}
            h={['200', '450']}
            mr={['0', '20']}
            objectFit={'contain'}
          />
        </motion.div>
        <VStack mt={['10', '0']} w={['full', '65%']}>
          <Heading
            // border={'1px solid'}
            w={'full'}
            p={'4'}
            size={['lg', 'xl']}
            textAlign={'center'}
            color={'#883AA8'}
            fontFamily={'Poppins'}
            fontWeight={'medium'}
            // noOfLines={2}
          >
            Hey..! {user.name} , Experience The New Crypto World !!
          </Heading>
          <Text
            width={'full'}
            p={'4'}
            // border={'1px solid'}
            textAlign={'center'}
            fontFamily={'cursive'}
            fontSize={'2xl'}
            color={'black'}
          >
            One of the best platform to Begin your Crypto journey.
          </Text>
          <Stack
            direction={['column', 'row']}
            spacing={['4', '8']}
            width={'full'}
            // border={'2px solid green'}
            mt={['0', '10']}
            alignItems={['unset', 'center']}
            p={['3', '4']}
          >
            <Image
              // alignSelf={'flex-start'}
              // ml={'4'}
              src={img2}
              w={'200'}
              h={'200'}
              borderRadius={'lg'}
              shadow={'dark-lg'}
              objectFit={'contain'}
              // my={'4'}
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
          </Stack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Home;
