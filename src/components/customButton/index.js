import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './customButtonStyles.scss';


const CustomButton = ({ label, icon }) => {
  return (
    <div className="button-container">
      <div>{label}</div>
      <div className="icon-container">
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.object
};

export default CustomButton;
