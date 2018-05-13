import React from 'react';

import './styles.css';

const FlatButton = ({ label, className, ...props }) => (
  <div className={`flat-button ${className ? className : ''}`} {...props}>
    {label}
  </div>
);

export default FlatButton;
