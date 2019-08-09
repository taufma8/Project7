import React from 'react';
import { NavLink } from 'react-router-dom';

// const Nav = () => {
class Nav extends React.Component {
  link = e => {
  this.props.onClick(e.target.innerText);
  // this.props.istrue(true);
  }
//The navigation buttons on the top of the page taking you to different topics
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to='/donuts' onClick={this.link} >Donuts</NavLink></li>
          <li><NavLink to='/french-fries' onClick={this.link}>French Fries</NavLink></li>
          <li><NavLink to='/cake' onClick={this.link}>Cake</NavLink></li>
          <li><NavLink to='/ice-cream' onClick={this.link}>Ice Cream</NavLink></li>
          <li><NavLink to='/pizza' onClick={this.link}>Pizza</NavLink></li>
        </ul>
      </nav>
    );
  }
}
  export default Nav;