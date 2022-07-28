import React from 'react';
import Btn from './Btn';

function OrderPlaced() {
  return (
    <>
      <section className="-z-10">
        <div className="container mx-auto px-8">
          <h1 className="mb-4 text-4xl font-medium">Order has been paid successfully!</h1>

          <div className="grid gap-6">
            <div className="rounded bg-green-200 p-5 font-medium text-green-900">
              You will receive notification by email with order details.
            </div>

            <div>
              <Btn link="#" text=" Go an order some more" className="btn bg-slate-800 text-white" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderPlaced;
