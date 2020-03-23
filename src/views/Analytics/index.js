import React, {Component} from 'react';
import './analytics.scss';


class Analytics extends Component {
  render() {
    return (
      <div className="analytics-page">
        <div className="analytics-header-section" />
        <div className="analytics-title-section" />
        <div className="analytics-section">
          <div className="section-A">
            <div className="visits-section" />
          </div>
          <div className="section-B">
            <div className="key-issues-section-container" />
            <div className="monitoring-section-container" >
              <div className="monitoring-period-container" />
              <div className="monitoring-graphs-container" />
              <div className="monitoring-details-container" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;
