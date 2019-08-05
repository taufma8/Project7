import React from 'react';

const Nav = ({pictures}) => {
  return (
    <nav className="main-nav">
      <ul>
        <li><a href='#'>Cats</a></li>
        <li><a href='#'>Oceans</a></li>
        <li><a href='#'>Sunsets</a></li>
      </ul>
    </nav>
  );
}

export default Nav;