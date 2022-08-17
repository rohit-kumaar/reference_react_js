import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTE_PATH } from 'routers/publicRoutes';
import Checkout from 'components/Checkout';
import Header from 'components/Header';
import Home from 'pages/Home';
import Login from 'pages/Login';
import MenuList from 'pages/MenuList';
import OrderPlaced from 'pages/OrderPlaced';
import ShoppingCart from 'pages/ShoppingCart';
import SignUp from 'pages/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <main className="mt-32">
          <Routes>
            <Route path={ROUTE_PATH.Default} element={<Home />} />
            <Route path={ROUTE_PATH.SignUp} element={<SignUp />} />
            <Route path={ROUTE_PATH.Login} element={<Login />} />
            <Route path={ROUTE_PATH.MenuList} element={<MenuList />} />
            <Route path={ROUTE_PATH.ShoppingCart} element={<ShoppingCart />} />
            <Route path={ROUTE_PATH.Checkout} element={<Checkout />} />
            <Route path={ROUTE_PATH.OrderPlaced} element={<OrderPlaced />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
