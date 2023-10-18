import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Coins from './Components/Coins';
import Exchanges from './Components/Exchanges';
import CoinDetails from './Components/CoinDetails';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/coins'} element={<Coins />} />
        <Route path={'/exchanges'} element={<Exchanges />} />
        <Route path={'/coins/:id'} element={<CoinDetails />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
      </Routes>
      <Toaster />
      <Footer />
    </Router>
  );
}

export default App;
