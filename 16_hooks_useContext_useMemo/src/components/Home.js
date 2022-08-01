import React, { createContext } from "react";
import Xyz from "./Xyz";
export const mycontext = createContext();

export default function Home() {
  const obj = { name: "Sumit", age: 23 };

  return (
    <>
      <mycontext.Provider value={obj}>
        <div>
          Home
          <Xyz />
        </div>
      </mycontext.Provider>
    </>
  );
}
