import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { context, server1 } from '..';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, setisAuthenticated, loading, setLoading } =
    useContext(context);

  const submitHandler = async e => {
    e.preventDefault();
    setLoading(true);
    console.log('loading status is :', loading);
    try {
      const { data } = await axios.post(
        `${server1}/user/login`,
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      toast.success('login Successfully');
      setisAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.msg);
      console.log(error);
      setisAuthenticated(false);
      setLoading(false);
    }
  };
  if (isAuthenticated) return <Navigate to={'/'} />;
  return (
    <Container
      maxW={'container.xl'}
      p={['4', '16']}
      pt={['35%', '16']}
      h={'100vh'}
      // border={'1px solid'}
    >
      <form onSubmit={submitHandler}>
        <VStack
          alignItems={'stretch'}
          spacing={'6'}
          // border={'1px solid'}
          w={['full', '40%']}
          p={['8', '16']}
          m={'auto'}
        >
          <Heading>Welcome Back...!</Heading>

          <Input
            type={'email'}
            placeholder={'Enter your email'}
            focusBorderColor={'purple.500'}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <Input
            type={'password'}
            placeholder={'Enter your password'}
            focusBorderColor={'purple.500'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <Button variant={'link'} colorScheme={'red'} alignSelf={'flex-end'}>
            <Link to={'/forgotpassword'}>Forgot password</Link>
          </Button>
          <Button colorScheme={'purple'} type={'submit'}>
            Log In
          </Button>
          <Text textAlign={'end'}>
            New user?{' '}
            <Button colorScheme="purple" variant={'link'}>
              <Link to={'/register'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
