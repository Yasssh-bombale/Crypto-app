import { Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
    </HStack>
  );
};

export default Header;
