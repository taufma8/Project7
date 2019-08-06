import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = ({pictures}) => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/cats'>Cats</NavLink></li>
        <li><NavLink to='/oceans'>Oceans</NavLink></li>
        <li><NavLink to='/sunsets'>Sunsets</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;