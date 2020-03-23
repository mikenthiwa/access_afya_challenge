import React, {Component} from 'react';
import AnalyticsHeader from '../../components/analyticsHeader';
import './analytics.scss';


class Analytics extends Component {

  renderSections = (className, component, title) => {
      return (
          <div className={className}>
              {component || title}
          </div>
      )
  };

  render() {
    return (
      <div className="analytics-page">
        {this.renderSections('analytics-header-section', <AnalyticsHeader />)}
        {this.renderSections('analytics-title-section', 'Analytics')}
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
