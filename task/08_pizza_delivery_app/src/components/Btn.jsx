import React from 'react';
import { Link } from 'react-router-dom';

function Btn(props) {
  return (
    <>
      <Link
        to={props.link}
        className={`btn inline-block border border-slate-800 bg-white text-black transition-colors duration-700 hover:bg-slate-800 hover:text-white ${props.className}`}
      >
        {props.text}
      </Link>
    </>
  );
}

export default Btn;
