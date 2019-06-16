import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <ul>
          <li>
            <Link to='/' id='links'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/services' id='links'>
              Services
            </Link>
          </li>
          <li>
            <Link to='/contacts' id='links'>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
