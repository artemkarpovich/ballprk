import React from 'react';
import ArrowDownIcon from './../../assets/images/down-arrow.svg';

const Selector = ({ items, defaultValue, value, children, onSelect }) => (
  <div className="selector">
    <select value={value} onChange={(event) => onSelect(event.currentTarget.value)}>
      <option value="" disabled>{defaultValue}</option>
      {children}
    </select>
    <img className="selector__icon" src={ArrowDownIcon} alt="arrow down icon" />
  </div>
);

export default Selector;
