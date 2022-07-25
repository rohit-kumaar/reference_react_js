import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.PNG';
import Btn from './Btn';

function Header() {
  return (
    <>
      <header className="mb-7">
        <div className="container mx-auto px-8">
          <div className="flex h-[15vh] items-center justify-between bg-slate-100 px-4">
            <Link to="/">
              <img
                className="w-16 cursor-pointer"
                loading="lazy"
                src={logo}
                alt="Pizza delivery logo"
                title="Our Brand"
              />
            </Link>

            <div>
              <Btn link="/sign-up" text="Sign Up" className="mr-0.5" />
              <Btn link="/login" text="Login" className="ml-0.5" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
