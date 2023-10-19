import { Button, HStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context, server1 } from '..';
import axios from 'axios';
import toast from 'react-hot-toast';

const Header = () => {
  const {
    isAuthenticated,
    setisAuthenticated,
    loading,
    setLoading,
    user,
    setUser,
  } = useContext(context);

  const logoutHandler = async () => {
    setLoading(true);
    try {
      await axios.get(`${server1}/user/logout`, {
        withCredentials: true,
      });
      toast.success('User logged out successfully');
      setisAuthenticated(false);
      setLoading(false);
      setUser({});
    } catch (error) {
      toast.error('Opps! some error occured');
      setisAuthenticated(true);
      setLoading(false);
    }
  };

  return (
    <HStack
      shadow={'lg'}
      p={'4'}
      pl={['0', '4']}
      pr={['0', '4']}
      spacing={['1', '4']}
    >
      <Button variant={'ghost'} colorScheme="purple">
        <Link to={'/'}>Home</Link>
      </Button>
      <Button variant={'ghost'} colorScheme="purple">
        <Link to={'/coins'}>Coins</Link>
      </Button>
      <Button variant={'ghost'} colorScheme="purple">
        <Link to={'/exchanges'}>Exchanges</Link>
      </Button>

      {isAuthenticated ? (
        <Button
          variant={'ghost'}
          colorScheme="purple"
          onClick={logoutHandler}
          disabled={loading}
        >
          Log Out
        </Button>
      ) : (
        <Button variant={'ghost'} colorScheme="purple">
          <Link to={'/login'}>Log In</Link>
        </Button>
      )}
    </HStack>
  );
};

export default Header;
