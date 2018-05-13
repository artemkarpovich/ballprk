import React from 'react';
import RaisedButton from './../raisedButton';
import InputField from './../inputField';

import './styles.css';

const options = [
  { label: 'Female', id: 'female' },
  { label: 'Male', id: 'male' },
  { label: 'Custom', id: 'custom' },
];

const GenderSelect = ({ value, customGender, className, onClick }) => (
  <div className={`gender-select ${className ? className : ''}`}>
    <label className="gender-select__label">Gender</label>
    <div className="gender-select__options">
      {options.map(({ label, id }) => <RaisedButton key={id} label={label} activeClassName={id === value} onClick={() => onClick('gender', id)} />)}
    </div>
    {value === 'custom' && <InputField
      value={customGender}
      onChange={(event) => onClick('customGender', event.currentTarget.value)}
      placeholder="What pronoun do you prefer?"
      className="gender-select__option-custom"
    />}
  </div>
);

export default GenderSelect;
