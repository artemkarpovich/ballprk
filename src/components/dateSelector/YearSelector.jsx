import React from 'react';
import Selector from './Selector';

const years = [];

for (let i = 2017; i > 1940; i--) {
  years.push(i);
}

const YearSelector = ({ value, onSelect }) => (
  <Selector value={value} defaultValue="Year" onSelect={onSelect}>
    {
      years.map(year => <option key={year} value={year}>{year}</option>)
    }
  </Selector>
);

export default YearSelector;
