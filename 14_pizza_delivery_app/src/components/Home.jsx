import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="container mx-auto px-8">
        <div className="h-[78vh] w-full rounded bg-slate-200 p-5 py-8 sm:h-[70vh] sm:py-24">
          <div className="border border-b-slate-300">
            <h1 className="text-6xl font-normal">Pizza Delivery</h1>
            <p className="py-8 text-lg">
              Welcome to pizza delivery service. This the pizza when you may choose the most
              delicious pizza like you from wide variety of options!
            </p>
          </div>

          <div>
            <p className="pt-6 pb-4 font-medium">
              We're performing delivery free of charge in case if you order is higher then 20$
            </p>
            <Link to="/sign-up" className="btn flex items-center justify-center">
              Sign In and Order
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
