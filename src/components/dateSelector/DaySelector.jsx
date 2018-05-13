import React from 'react';
import Selector from './Selector';

const days = [];

for(let i = 1; i <= 31; i++) {
  days.push(i);
}

const DaySelector = ({ value, onSelect }) => (
  <Selector value={value} defaultValue="Day" onSelect={onSelect}>
    {
      days.map(day => <option key={day} value={day}>{day}</option>)
    }
  </Selector>
);

export default DaySelector;
