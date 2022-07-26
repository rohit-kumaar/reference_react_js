import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.PNG';
import Btn from './Btn';

function Header() {
  const navigate = useNavigate();
  // const [menu, setMenu] = useState('bx-menu');
  // const [circle, setCircle] = useState('bx-x-circle');

  const hamburger = () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const active = hamburgerMenu.classList.toggle('active');
    if (active) {
      // setMenu('bx-x-circle');
      hamburger.classList.add('bx-menu');
      hamburger.classList.remove('bx-x-circle');
    } else {
      // setCircle('bx-menu');
      hamburger.classList.remove('bx-menu');
      hamburger.classList.add('bx-x-circle');
    }
  };

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
              {window.location.href === 'http://localhost:3000/sign-up' && (
                <Btn link="/login" text="Login" className="ml-0.5" />
              )}

              {window.location.href === 'http://localhost:3000/login' && (
                <Btn link="/sign-up" text="Sign Up" className="mr-0.5" />
              )}

              {window.location.href === 'http://localhost:3000/' && (
                <>
                  <Btn link="/sign-up" text="Sign Up" className="mr-0.5" />
                  <Btn link="/login" text="Login" className="ml-0.5" />
                </>
              )}
            </div>

            {window.location.href === 'http://localhost:3000/menu-list' && (
              <nav>
                <ul className="hamburger-menu active fixed top-0 right-0 bottom-0 left-20 z-10 flex flex-col gap-6 bg-slate-200/40 p-12 backdrop-blur-xl transition-transform duration-700 sm:static sm:left-0 sm:translate-x-0 sm:flex-row sm:items-center sm:justify-center sm:bg-transparent sm:p-0 sm:transition-none">
                  <li>
                    <Link to="#" className="font-medium text-slate-500">
                      Menu
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className="font-medium text-slate-500">
                      Cart
                      <span className="btn py-0 px-1.5 text-xs font-medium">6</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className="font-medium text-slate-500">
                      Profile
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="btn mr-0.5 inline-block border border-slate-800 bg-white text-black transition-colors duration-700 hover:bg-slate-800 hover:text-white"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>

                <div className="cursor-pointer sm:hidden">
                  <i
                    className={`bx bx-menu  relative z-20 text-4xl`}
                    onClick={() => hamburger()}
                  ></i>
                </div>
              </nav>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
