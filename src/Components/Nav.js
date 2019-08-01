import React from 'react';

const Nav = ({match}) => {
  return (
        <nav name="main-nav">
          <ul>
            <li><button>Cats</button></li>
            <li><button>Oceans</button></li>     
            <li><button>Sunsets</button></li>               
          </ul>
        </nav>
  );
}

export default Nav;