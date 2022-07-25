import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import MenuList from './components/MenuList';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menu-list" element={<MenuList />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
