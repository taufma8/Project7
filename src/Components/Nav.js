import React from 'react';

const Nav = ({ match }) => {
  return (
    <nav class="main-nav">
      <ul>
        <li><a href='#'>Cats</a></li>
        <li><a href='#'>Oceans</a></li>
        <li><a href='#'>Sunsets</a></li>
      </ul>
    </nav>
  );
}

export default Nav;