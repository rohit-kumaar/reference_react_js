import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
//styles component ul 
const Ul=styled.ul`
  list-style-type:none
`
const Li=styled.li`
  display:inline;
  color:green;
  width:30%
`
export default function Nav() {
  return (
    <div>
        <Ul>
            <Li> <Link to="/"> Home </Link></Li>
            <Li> <Link to="/about"> About Us </Link></Li>
            <Li> <Link to="/gallery"> Gallery </Link></Li>
            <Li> <Link to="/contact"> Contact Us </Link></Li>
        </Ul>
    </div>
  )
}
