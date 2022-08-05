import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import MenuList from './components/MenuList';
import OrderPlaced from './components/OrderPlaced';
import ShoppingCart from './components/ShoppingCart';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <main className="mt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menu-list" element={<MenuList />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-placed" element={<OrderPlaced />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
