import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} p={'16'} h={'100vh'} border={'1px solid'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'6'}
          border={'1px solid'}
          w={'40%'}
          p={'16'}
          m={'auto'}
        >
          <Heading>Welcome Back...!</Heading>

          <Input
            type={'email'}
            placeholder={'Enter your email'}
            focusBorderColor={'purple.500'}
            required
          />

          <Input
            type={'password'}
            placeholder={'Enter your password'}
            focusBorderColor={'purple.500'}
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
