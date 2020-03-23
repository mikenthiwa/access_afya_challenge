import React, {Component} from 'react';
import mockData from './mock_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './vistsStyle.scss';

class Visits extends Component{

    state = {
        kiambu: true,
        mukuruKwaRuben: false,
        babaDogo: false,
        kosovo: false,
        mukuruKayaba: false,
    };

    selectedAre = (areaName) => {
        Object.keys(this.state).map(area => {
            if(this.state[area]){
                this.setState(prevState => {
                    return {...prevState, [area]: false, [areaName]: true}
                })
            }
        })
    };

    renderArea = () => {
       return mockData.map((data, index) => {
           const {className} = data;
           return (
               <div className={`${this.state[className]?'active-area-container': 'inactive-area-container'}`}
                    onClick={() => this.selectedAre(className)}
                    key={index}
               >
                   <div className="area-number">{data.numberOfVisits}</div>
                   <div className="area-name">{data.areaName}</div>
                   <div className="dots">
                       <FontAwesomeIcon icon={faEllipsisV} />
                   </div>
               </div>
           )
       })

    };
  render() {
    return (
      <div className="visits-container">
        <div className="visits-header">Visits</div>
        <div className="visits-body">
            {this.renderArea()}
        </div>
      </div>
    );
  }
}

export default Visits;
