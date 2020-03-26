import React, {Component} from 'react';
import mockData from './mockData';
import { LineChart } from 'react-chartkick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp , faSortDown } from '@fortawesome/free-solid-svg-icons';
import 'chart.js';
import './monitorGraphStyle.scss';

class MonitorGraph extends Component {

    renderCardGraph = () => {
        return mockData.map(data => {
            return (
                <div className="card-graph-cont">
                    <div className="card-graph-header">{data.title}</div>
                    <div className="card-graph-body">
                        <div className="card-graph-data">
                            <div className="total-number">{data.totalNumber}</div>
                            <div className="name">{data.name}</div>
                            <div className='count'>
                                {data.increase
                                    ? <FontAwesomeIcon className='icon' icon={faSortUp} color='green' />
                                    : <FontAwesomeIcon icon={faSortDown} color='red' /> }
                                <div className={`${data.increase ? 'increase': 'decrease' }`}>{data.count}</div>
                            </div>
                        </div>
                        <div className="card-graph">
                            <LineChart data={data.lineData} colors={data.increase ? ['green']: ['red']} width="100px" height="100px"/>
                        </div>
                    </div>
                </div>
            )
        })
    };
  render() {
    return (
      <div className="card-graph-section">
          {this.renderCardGraph()}
      </div>
    );
  }
}

export default MonitorGraph;
