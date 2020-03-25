import React, { Component } from 'react';
import data from './mockData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './keyIssueStyle.scss';

class Issue extends Component {

    state = {
        wrongPrescription: true,
        openedLate: false,
        badReceipt: false,
        lateCheckins: false,
        delayInLab: false,
        carelessWasteDisposal: false
    };

  selected = (issueName) => {
    console.log(12345);
    Object.keys(this.state).forEach(issue => {
        if(this.state[issue]) {
            this.setState(prevState => ({
                ...prevState, [issue]: false, [issueName]: true
            }))
        }
    })
  };

  renderIssues = () => {
    return data.map((keyIssue, index) => {
      const { issue, areaName, className } = keyIssue;
      return (
          <div key={index} className={`${this.state[className] ? 'issue-container-active': 'issue-container-inactive' }`} onClick={() => this.selected(className)}>
            <div className="issue">
                <div>{ issue }</div>
                <div className='area-name'>{areaName}</div>
            </div>
              <div>
                  <FontAwesomeIcon icon={faEllipsisV} />
              </div>
          </div>
      )
    })
  };

  render() {
    return (
      <div className="key-issue-container">
        {this.renderIssues()}
      </div>
    );
  }
}

export default Issue;
