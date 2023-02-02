import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Signin from './components/Files/Signin';
import Landing from './components/Files/Landing';
import Home from './components/Files/Home';
import Cart from './components/Files/Cart';
import Checkout from './components/Files/Checkout';
import History from './components/Files/History';
import Modal from './components/Files/Modal';
import Myoffer from './components/Files/Myoffer';
import MyProfile from './components/Files/MyProfile';
import Payment from './components/Files/PaymentMethod';
import Proceed from './components/Files/ProceedPage';
import Search from './components/Files/Searchitem';
import VeggieTomato from './components/Files/veggieTomato';
import Oders from './components/Files/Oders';
import Connection from './components/Files/Connection';
import Spicy from './components/Files/SpicyChicken';

function App() {
  return (
    <NavigationContainer>
      {/* <Landing /> */}
      <Signin />
      {/* <Home /> */}
      {/* <Cart /> */}
      {/* <Checkout /> */}
      {/* <History /> */}
      {/* <Modal /> */}
      {/* <VeggieTomato /> */}
      {/* <MyProfile /> */}
      {/* <Payment /> */}
      {/* <Proceed /> */}
      {/* <Myoffer /> */}
      {/* <Search /> */}
      {/* <Oders /> */}
      {/* <Connection /> */}
      {/* <Spicy /> */}
    </NavigationContainer>
  );
}
export default App;
