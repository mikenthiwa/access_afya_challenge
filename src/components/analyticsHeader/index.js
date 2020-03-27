import React, { Component } from 'react';
import CustomButton from '../customButton';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ProfileSection from '../../components/Profile';
import './analyticsHeader.scss';

class AnalyticsHeader extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="add-container">
          <CustomButton label="Add Assessment" icon={faPlus} />
        </div>
        <div className="profile-container">
          <ProfileSection />
        </div>
      </div>
    );
  }
}

export default AnalyticsHeader;
