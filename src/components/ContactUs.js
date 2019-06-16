import React, { Component } from 'react';

export class ContactUs extends Component {
  render() {
    return (
      <div className='contact-us'>
        <div className='container'>
          <h1>Get in touch</h1>
          <div className='three-grid'>
            <div className='contact-card'>
              <h3>Call Us</h3>
              <p>021 484 212</p>
            </div>
            <div className='contact-card'>
              <h3>Email Us</h3>
              <p>mark@vpdl.co.nz</p>
            </div>
            <div className='contact-card'>
              <h3>Like us on Facebook</h3>
              <p>Valley Plumbing and Drainage Ltd</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
