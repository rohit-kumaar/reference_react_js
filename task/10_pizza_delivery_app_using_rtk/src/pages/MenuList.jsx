import React from 'react';
import data from 'data/menu';
import productImage from 'assets/images/pizza.jpg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addToCart } from 'features/cart/cartSlice';

function MenuList() {
  const products = data.menu;
  const dispatch = useDispatch();

  return (
    <>
      <section className="-z-10">
        <div className="container mx-auto px-8">
          <h1 className="mb-4 text-4xl font-medium">Menu</h1>

          <div className="cards grid gap-x-5 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
            {products?.map((product) => (
              <div
                key={product.id}
                className="card flex flex-col items-center rounded border border-slate-300 p-5"
              >
                <img loading="lazy" src={productImage} alt="pizza" title={product.title} />
                <h2 className="text-xl font-bold">{product.name}</h2>
                <div className="mt-3 flex items-center gap-4">
                  <button className="btn" onClick={() => dispatch(addToCart())}>
                    Add to Cart
                  </button>
                  <span className="font-bold">
                    $<span>{product.price}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  );
}

export default MenuList;
