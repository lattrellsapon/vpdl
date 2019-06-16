import React, { Component } from 'react';
import TestPic from '../../src/images/test.jpg';

export class Services extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='sub-heading'>Services we offer</h1>
        <div className='four-grid'>
          <div className='services-content'>
            <img src={TestPic} alt='' />
            <div className='overlay'>
              <div className='text'>
                <a id='services-links' href='#'>
                  <h3>REPAIR</h3>
                </a>
              </div>
            </div>
          </div>
          <div className='services-content'>
            <img src={TestPic} alt='' />
            <div className='overlay'>
              <div className='text'>
                <a id='services-links' href='#'>
                  <h3>MAINTENANCE</h3>
                </a>
              </div>
            </div>
          </div>
          <div className='services-content'>
            <img src={TestPic} alt='' />
            <div className='overlay'>
              <div className='text'>
                <a id='services-links' href='#'>
                  <h3>PLUMBING</h3>
                </a>
              </div>
            </div>
          </div>
          <div className='services-content'>
            <img src={TestPic} alt='' />
            <div className='overlay'>
              <div className='text'>
                <a id='services-links' href='#'>
                  <h3>DRAINAGE</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a href='' id='learn-more'>
            <h3>LEARN MORE</h3>
          </a>
        </div>
      </div>
    );
  }
}

export default Services;
