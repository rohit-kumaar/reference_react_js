import React from 'react';
import Btn from './Btn';

function Checkout() {
  return (
    <>
      <section className="-z-10 mt-32">
        <div className="container mx-auto px-8">
          <h1 className="mb-4 text-4xl font-medium">Checkout</h1>

          <div className="grid gap-2">
            <h2 className="text-2xl">Credit Card</h2>
            <input
              id="text"
              name="text"
              type="text"
              autoComplete="text"
              required
              className="relative  block w-full border border-gray-300 px-3 py-3 sm:text-sm"
              placeholder="Enter Quantity"
            />
            <span className="mb-5 flex items-center gap-2 font-medium">
              Order Total: <span className="text-xl font-bold">$18.3</span>
            </span>
            <div>
              <Btn
                link="/order-placed"
                text="Order Placed"
                className="btn bg-slate-800 text-white"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
