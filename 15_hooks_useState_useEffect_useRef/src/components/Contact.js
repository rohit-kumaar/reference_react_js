import React, { useRef } from "react";

export default function Contact() {
  const myRef = useRef(null);
  const handler = () => {
    myRef.current.value = "useRef implementation";
    myRef.current.focus();
  };
  return (
    <>
      <div>UseRef Example</div>
      <button onClick={handler}> Action </button>
      <br />
      <textarea ref={myRef}></textarea>
    </>
  );
}
