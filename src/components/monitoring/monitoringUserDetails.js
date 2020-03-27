import React, { Component} from  'react';
import monitorDetails from './mockData/index';
import { ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp , faSortDown } from '@fortawesome/free-solid-svg-icons';
import './monitoringUserDetails.scss';

class MonitoringUserDetails extends Component {

  renderHeader = () => {
    const headings = [
        'No', 'Staff Name', 'Efficiency Delta', 'NPS Delta', 'Efficiency', 'Reported Issues'
    ];
    return headings.map(heading => (
      <div className={`heading ${heading}`}>{ heading }</div>
    ))
  };

  renderMonitorData = () => {
    return monitorDetails.map(data => {
      const {
        number,
        name,
        EfficiencyDelta: {E_count, E_increase},
        NPSDelta:{N_count, N_increase},
          Efficiency,
          ReportedIssue,
      } = data;
      return (
          <div className='mon-details'>
            <div className='data number'>{number}</div>
            <div className='data staff-name'>{name}</div>
            <div className='efficiencyDelta data'>
              <div className='e-count data'>{E_count}</div>
              <div className='increase-rate'>{E_increase}</div>
                <div className='arrow-icon'>{data.increase === undefined
                    ? '': data.increase
                        ? <FontAwesomeIcon icon={faSortUp} color='green' />
                        : <FontAwesomeIcon icon={faSortDown} color='red' />}
                </div>
            </div>
            <div className='npsDelta data'>
                <div className='n-count'>{N_count}</div>
                <div className='increase-rate'>{N_increase}</div>
                <div className='arrow-icon'>{data.increase === undefined
                    ? '': data.increase
                        ? <FontAwesomeIcon icon={faSortUp} color='green' />
                        : <FontAwesomeIcon icon={faSortDown} color='red' />}
                </div>
            </div>
            <div className='data efficiency'>
              <div>{Efficiency + '%'}</div>
              <ProgressBar now={Efficiency}/>
            </div>
            <div className='data reportedIssues'>
              <div>{ReportedIssue}</div>
              <ProgressBar now={ReportedIssue} />
            </div>
          </div>
      )
    })
  };

  render() {
    return (
      <div className="mon-user-details">
        <div className='mon-user-header'>
          {this.renderHeader()}
        </div>
          {this.renderMonitorData()}
      </div>
    );
  }
}

export default MonitoringUserDetails;
