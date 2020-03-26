import React, { Component } from 'react';
import './monitoring.scss';

class Monitor extends Component {

    state = {
        Day: true,
        Week: false,
        Month: false,
        Year: false,
    };

    selected = period => {
        Object.keys(this.state).forEach(key => {
            if(this.state[key]) {
                this.setState(prevState => {
                    return {...prevState, [key]: false, [period]: true}
                })
            }
        })
    };

    renderPeriods = () => {
        const periods = ['Day', 'Week', 'Month', 'Year'];
        return periods.map((period, index) => (
            <div className={`${this.state[period] ? 'active-period': 'inactive-period'}`} key={index} onClick={() => this.selected(period)} >
                {period}
            </div>
        ))
    };


  render() {
    return (
      <div className="monitor-container">
        <div className="monitor-header"> MONITORING PERIOD</div>
        <div className="monitor-period-cont">
          <div className="sect-A">
              {this.renderPeriods()}
          </div>
          <div className="sect-B">
              10 Dec 2019 10 JAN 2020
          </div>
        </div>
      </div>
    );
  }
}

export default Monitor;
