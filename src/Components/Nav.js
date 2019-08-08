import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component {
  link = e => {
  this.props.onClick(e.target.innerText);
  this.props.istrue(true);
}
  render() {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/food' onClick={this.link} >Food</NavLink></li>
        <li><NavLink to='/travel' onClick={this.link}>Travel</NavLink></li>
        <li><NavLink to='/people' onClick={this.link}>People</NavLink></li>
        <li><NavLink to='/ice-cream' onClick={this.link}>Ice Cream</NavLink></li>
        <li><NavLink to='/grand-canyon' onClick={this.link}>Scenery</NavLink></li>
      </ul>
    </nav>
  );
  }
}
export default Nav;