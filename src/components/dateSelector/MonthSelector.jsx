import React from 'react';
import Selector from './Selector';

const MonthSelector = ({ value, onSelect }) => (
  <Selector value={value} defaultValue="Month" onSelect={onSelect}>
    <option value="1">Jan</option>
    <option value="2">Feb</option>
    <option value="3">Mar</option>
    <option value="4">Apr</option>
    <option value="5">May</option>
    <option value="6">Jun</option>
    <option value="7">Jul</option>
    <option value="8">Aug</option>
    <option value="9">Sep</option>
    <option value="10">Oct</option>
    <option value="11">Nov</option>
    <option value="12">Dec</option>
  </Selector>
);

export default MonthSelector;
