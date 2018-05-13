import React from 'react';

import './styles.css';

const InputField = ({ name, className, ...props }) => (
  <div className={`input-field ${className ? className : ''}`}>
    {name && <label className="input-field__label">{name}</label>}
    <input type="text" className="input-field__input" {...props} />
  </div>
);

export default InputField;
