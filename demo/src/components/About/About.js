import React from 'react';
import {NavLink} from 'react-router-dom';

export default function About(props) {
  return (
    <div>
      <h1>This is the About component</h1>
      <NavLink activeClassName="red" to="/about/faq">FAQ</NavLink>
      <NavLink activeClassName="blue" to="/about/company">Company</NavLink>
      {props.children}
    </div>
  )
}