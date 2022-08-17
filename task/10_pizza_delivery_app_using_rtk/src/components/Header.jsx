import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { URL } from 'config';
import logo from 'assets/images/logo.PNG';
import Btn from './Btn';
import { useSelector } from 'react-redux/es/exports';

function Header() {
  const [isToggle, setIsToggle] = useState(false);
  // const [addedCart, setAddedCart] = useState(0);

  // useEffect(() => {
  //   if (localStorage.getItem('cart')) {
  //     let cartItem = JSON.parse(localStorage.getItem('cart'));
  //     setAddedCart(cartItem.length);
  //   }
  // }, []);

  const addedCart = useSelector((state) => state.cart.value);

  return (
    <>
      <header className="relative mb-7">
        <div className="container fixed top-0 mx-auto px-8">
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
              {window.location.href === `${URL}sign-up` && (
                <Btn link="/login" text="Login" className="ml-0.5" />
              )}

              {window.location.href === `${URL}login` && (
                <Btn link="/sign-up" text="Sign Up" className="mr-0.5" />
              )}

              {window.location.href === `${URL}` && (
                <>
                  <Btn link="/sign-up" text="Sign Up" className="mr-0.5" />
                  <Btn link="/login" text="Login" className="ml-0.5" />
                </>
              )}
            </div>

            {(window.location.href === `${URL}menu-list` ||
              window.location.href === `${URL}shopping-cart` ||
              window.location.href === `${URL}checkout` ||
              window.location.href === `${URL}order-placed`) && (
              <nav>
                <ul
                  className={`
                  ${isToggle === false ? 'translate-x-full' : ''}  
                   fixed  inset-0 z-20 flex  flex-col gap-6 bg-slate-200/40 p-12 backdrop-blur-xl transition-transform duration-700 sm:static sm:left-0 sm:translate-x-0 sm:flex-row sm:items-center sm:justify-center sm:bg-transparent sm:p-0 sm:transition-none`}
                >
                  <li>
                    <Link to="/menu-list" className="font-medium text-slate-500">
                      Menu
                    </Link>
                  </li>

                  <li>
                    <Link to="/shopping-cart" className="font-medium text-slate-500">
                      Cart
                      <span className="btn ml-1 py-0 px-1.5 text-xs font-medium">{addedCart}</span>
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
                    className={`
                     ${isToggle === true ? 'bx-x-circle' : ' bx-menu'}
                    bx relative z-20 text-4xl`}
                    onClick={() => setIsToggle(!isToggle)}
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
