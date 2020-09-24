import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <h3>LOGO</h3>
        </Link>

        <ul className="navbar-list">
          <Link to='/'>
            <li className="navbar-list__link">
              Home
            </li>
          </Link>
          <Link to="/about-us">
            <li className="navbar-list__link">
              About Us
            </li>
          </Link>
          <Link to="/contact-us">
            <li className="navbar-list__link">
              Contact Us
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;