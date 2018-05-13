import React from 'react';

const SelectFieldItem = ({ primaryText, value, onClick, ...props }) => (
  <li value={value} onClick={onClick} {...props}>{primaryText}</li>
);

export default SelectFieldItem;
