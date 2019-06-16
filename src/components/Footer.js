import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <h3>
          Website by{' '}
          <a
            href='https://www.treezywebdesign.com/'
            target='_blank'
            id='treezy'
          >
            Treezy Web Design
          </a>
        </h3>
      </div>
    );
  }
}

export default Footer;
