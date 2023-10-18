import React, { useContext, useEffect } from 'react';

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
import axios from 'axios';
import { context, server1 } from '.';

function App() {
  // const { setUser, setisAuthenticated } = useContext(context);

  // useEffect(() => {
  //   axios
  //     .get(`${server1}/user/me`, {
  //       withCredentials: true,
  //     })
  //     .then(res => {
  //       setUser(res.data.user);
  //       // console.log(res.data.user.name);
  //       setisAuthenticated(true);
  //     })
  //     .catch(error => {
  //       setUser({});
  //       setisAuthenticated(false);
  //     });
  // }, []);

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
