import {
  Avatar,
  Button,
  Container,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { server1 } from '../index';

import axios from 'axios';
import toast from 'react-hot-toast';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setisRegistered] = useState(false);
  const submitHandler = async e => {
    e.preventDefault();
    console.log(name, email, password);
    try {
      const { data } = await axios.post(
        `${server1}/user/register`,
        {
          name,
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
      console.log(data.msg);
      toast.success(data.msg);
      setisRegistered(true);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
      setisRegistered(false);
    }
  };
  if (isRegistered) return <Navigate to={'/login'} />;
  return (
    <Container maxW={'container.xl'} p={'16'} h={'100vh'} border={'1px solid'}>
      <form onSubmit={submitHandler}>
        <VStack
          alignItems={'stretch'}
          spacing={'6'}
          border={'1px solid'}
          w={'40%'}
          p={'16'}
          m={'auto'}
        >
          <Avatar alignSelf={'center'} boxSize={'100'} />
          <Input
            type={'text'}
            placeholder={'Enter your name'}
            focusBorderColor={'purple.500'}
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
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

          <Button colorScheme={'purple'} type={'submit'}>
            Register
          </Button>
          <Text textAlign={'end'}>
            Already have an account?{' '}
            <Button colorScheme="purple" variant={'link'}>
              <Link to={'/login'}>Log in</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Register;
