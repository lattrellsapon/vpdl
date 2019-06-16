import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='flex-container'>
          <div className='brand-header'>
            <h1>VPDL</h1>
          </div>
          <div className='brand-tagline'>
            <h3>Get in touch</h3>
            <dir class='logo-container'>
              <div className='instagram-logo'>
                <i class='fas fa-phone' id='contact-logo' />
              </div>
              <div className='facebook-logo'>
                <i class='fab fa-facebook-square' id='contact-logo' />
              </div>
              <div className='email-logo'>
                <i class='fas fa-envelope' id='contact-logo' />
              </div>
            </dir>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
