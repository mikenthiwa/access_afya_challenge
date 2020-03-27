import React, { Component, Fragment } from 'react';
import { ProgressBar } from 'react-bootstrap';
import './profileSecStyles.scss';

class ProfileSection extends Component {
  render() {
    return (
      <Fragment>
        <div className="progressBar">
          <ProgressBar now={80} />
          <div>24k/24k patient seen</div>
        </div>
        <div className="user-details-container">
          <div className="user-detail">
            <div className="name">Sandra Mamai</div>
            <span className="email">smamai@accessafya.com</span>
          </div>
          <div className="profile-pic-container">
            <span className="initials">M</span>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProfileSection;
