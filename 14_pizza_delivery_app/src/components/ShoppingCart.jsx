import React from 'react';
import pizza from '../assets/images/pizza.jpg';
import Btn from './Btn';

function ShoppingCart() {
  return (
    <>
      <section className="container mx-auto px-8">
        <h1 className="mb-4 border-b-2 pb-4 text-4xl font-medium">Shopping Cart</h1>

        <div className="grid gap-2 border-b-2 pb-4 md:grid-cols-5 md:gap-0">
          <img className="w-1/6" loading="lazy" src={pizza} alt="pizza" title="pizza" />
          <h2 className="text-xl font-bold">Cheeseburger</h2>
          <span className="flex items-center font-bold">$18.3</span>

          <input
            type="number"
            className=" block w-full border border-gray-300 px-3 py-3 sm:text-sm"
            placeholder="Enter Quantity"
          />

          <div className="flex sm:justify-end">
            <button className="btn justify-end">Delete</button>
          </div>
        </div>

        <div className="grid gap-2 py-4 md:grid-cols-5 md:gap-0">
          <h2 className="text-2xl font-medium">Total</h2>
          <div></div>
          <span className="text-2xl font-bold">$18.3</span>
          <div></div>
          <div className="flex sm:justify-end">
            <Btn link="/checkout" text="Checkout" className="btn bg-slate-800 text-white" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ShoppingCart;
