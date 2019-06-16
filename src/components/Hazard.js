import React, { Component } from 'react';
import HazardCo from '../../src/images/hazardco.jpg';

export class Hazard extends Component {
  render() {
    return (
      <div className='container hazard'>
        <div className='two-grid' id='hazard-container'>
          <div>
            <img src={HazardCo} alt='' />
          </div>
          <div>
            <p>
              At Valley Plumbing and Drainage we aim to make Health and Safety
              our top priority, including being proud members of HazardCo.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Hazard;
