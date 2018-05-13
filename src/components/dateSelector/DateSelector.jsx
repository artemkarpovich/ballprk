import React from 'react';
import DaySelector from './DaySelector';
import MonthSelector from './MonthSelector';
import YearSelector from './YearSelector';

import './styles.css';

class DateSelector extends React.Component {

  render() {
    const { className, day, month, year, onSelect } = this.props;
    return (
      <div className={`date-selector ${className ? className : ''}`}>
        <label className="date-selector__label">
          Birth Date
        </label>
        <div className="date-selector__selectors">
          <div className="date-selector__day"><DaySelector value={day} onSelect={(value) => onSelect('day', value)} /></div>
          <div className="date-selector__month"><MonthSelector value={month} onSelect={(value) => onSelect('month', value)} /></div>
          <div className="date-selector__year"><YearSelector value={year} onSelect={(value) => onSelect('year', value)} /></div>
        </div>
      </div>
    );
  }
}

export default DateSelector;
