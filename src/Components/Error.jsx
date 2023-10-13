import { Alert, AlertIcon } from '@chakra-ui/react';
import React from 'react';

const Error = ({ msg }) => {
  return (
    <Alert
      status={'error'}
      position={'fixed'}
      bottom={'5'}
      left={'50%'}
      transform={'translateX(-50%)'}
      width={'container.md'}
      justifyContent={'center'}
      borderRadius={'lg'}
      fontSize={'1xl'}
    >
      <AlertIcon />
      {msg}
    </Alert>
  );
};

export default Error;
