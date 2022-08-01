import React, { useContext } from "react";
import { mycontext } from "./Home";

export default function ReadContext() {
  const userData = useContext(mycontext);

  return (
    <div>
      <h2> Read Context API Data</h2>
      <p>
        Name is {userData.name} and age is {userData.age}
      </p>
    </div>
  );
}
