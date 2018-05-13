import React from 'react';

import './styles.css';

const RaisedButton = ({ label, className, activeClassName, ...props }) => (
  <div className={`raised-button ${className ? className : ''} ${activeClassName ? 'raised-button_active' : ''}`} {...props}>
    {label}
  </div>
);

export default RaisedButton;
