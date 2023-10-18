import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode, createContext, useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

export const context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <context.Provider
        value={{
          isAuthenticated,
          setisAuthenticated,
        }}
      >
        <App />
      </context.Provider>
    </ChakraProvider>
  );
};

root.render(
  <StrictMode>
    <ColorModeScript />
    <AppWrapper />
  </StrictMode>
);

export const server = 'https://api.coingecko.com/api/v3';
export const server1 = 'https://nodejs-todoapp-evy8.onrender.com/api/v1';
