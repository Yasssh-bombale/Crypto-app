import { Button, HStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '..';

const Header = () => {
  const { isAuthenticated, setisAuthenticated } = useContext(context);
  console.log(isAuthenticated);
  return (
    <HStack shadow={'lg'} p={'4'} spacing={'4'}>
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
        <Button variant={'ghost'} colorScheme="purple">
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
