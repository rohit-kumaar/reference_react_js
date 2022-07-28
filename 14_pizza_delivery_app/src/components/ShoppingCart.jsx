import React, { useState } from 'react';
import pizza from '../assets/images/pizza.jpg';
import Btn from './Btn';

function ShoppingCart() {
  const [qty, setQty] = useState(null);
  const data = JSON.parse(localStorage.getItem('cart'));
  const [getItems, setGetItems] = useState(data);

  const deleteCartItem = (id) => {
    let remainGetItems = getItems.filter((getItem) => getItem.id !== id);
    setGetItems(remainGetItems);
  };

  return (
    <>
      <section className="container mx-auto  px-8">
        {getItems ? (
          <>
            <h2 className="mb-4 border-b-2 pb-4 text-4xl font-medium">Shopping Cart</h2>

            {getItems.map((getItem) => (
              <div key={getItem.id} className="grid gap-2 border-b-2 py-4 md:grid-cols-5 md:gap-0">
                <img className="w-1/6" loading="lazy" src={pizza} alt="pizza" title="pizza" />
                <h2 className="text-xl font-bold">{getItem.name}</h2>
                <span className="flex items-center font-bold">
                  $ <span className="ml-1">{getItem.price}</span>
                </span>

                <input
                  type="number"
                  className=" block w-full border border-gray-300 px-3 py-3 sm:text-sm"
                  placeholder="Enter Quantity"
                  value={getItem.quantity}
                  onChange={() => setQty(getItem.quantity)}
                />

                <div className="flex sm:justify-end">
                  <button className="btn justify-end" onClick={() => deleteCartItem(getItem.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <div className="grid gap-2 py-4 md:grid-cols-5 md:gap-0">
              <h2 className="text-2xl font-medium">Total</h2>
              <div></div>
              <span className="text-2xl font-bold">$18.92</span>
              <div></div>
              <div className="flex sm:justify-end">
                <Btn link="/checkout" text="Checkout" className="btn bg-slate-800 text-white" />
              </div>
            </div>
          </>
        ) : (
          <h1 className="mb-4 border-b-2 pb-4 pt-5 text-center text-4xl font-medium">
            Your cart is empty
          </h1>
        )}
      </section>
    </>
  );
}

export default ShoppingCart;
