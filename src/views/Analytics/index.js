import React, {Component} from 'react';
import AnalyticsHeader from '../../components/analyticsHeader';
import Visits from "../../components/visits";
import Issue from "../../components/keyIssues";
import Monitor from "../../components/monitoring";
import MonitoringUserDetails from "../../components/monitoring/monitoringUserDetails";
import MonitorGraph from "../../components/monitorGraph";
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
              {this.renderSections("visits-section", <Visits />)}
          </div>
          <div className="section-B">
              {this.renderSections("key-issues-section-container", <Issue />)}
            <div className="monitoring-section-container" >
                {this.renderSections("monitoring-period-container", <Monitor />)}
                {this.renderSections("monitoring-graphs-container", <MonitorGraph />)}
              {/*<div className="monitoring-graphs-container" />*/}
                {this.renderSections('monitoring-details-container', <MonitoringUserDetails />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;
