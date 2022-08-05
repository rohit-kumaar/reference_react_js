import React from 'react'
import {Link} from 'react-router-dom';
export default function Nav() {
  return (
    <div>
        <ul>
            <li> <Link to="/"> Home </Link></li>
            <li> <Link to="/about"> About Us </Link></li>
            <li> <Link to="/gallery"> Gallery </Link></li>
            <li> <Link to="/contact"> Contact Us </Link></li>
        </ul>
    </div>
  )
}
