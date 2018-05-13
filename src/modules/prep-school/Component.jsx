import React from 'react';
import Header from './../../components/header';
import LinkButton from './../../components/linkButton';
import { SelectField, SelectFieldItem } from './../../components/selectField';
import InputField from './../../components/inputField';
import DateSelector from './../../components/dateSelector';
import GenderSelect from './../../components/genderSelect';
import Footer from './../../components/footer';

import './styles.css';

const KINDS_OF_SPORT = [
  { id: 1, name: 'Baseball' },
  { id: 2, name: 'Soccer' },
  { id: 3, name: 'Tennis' },
  { id: 4, name: 'Cycling' },
];

const Positions = [
  { id: 1, name: 'Linebacker' },
  { id: 2, name: 'Defencive End' },
  { id: 3, name: 'Wide Recevier' },
  { id: 4, name: 'Punter' },
];

const Component = ({ onChangeValue, sportId, positionId, highSchool, day, month, year, gender, customGender }) => (
  <div className="container">
    <Header />
    <div className="wrapper">
      <div className="content">
        <div className="form">
          <h1 className="form__title">let's get started</h1>
          <p className="form__description">We saw you across the room and we don't usually do this but...</p>
          <LinkButton to="/" text="Prep School" className="form__link-button" />
          <form className="form__body">
            <div className="form__body-select-field-group">
              <SelectField
                name="Sport"
                placeholderText="Choose your Sport"
                value={sportId}
                onChange={(value) => onChangeValue('sportId', value)}
              >
                {KINDS_OF_SPORT.map(({ id, name }) => <SelectFieldItem
                  key={id}
                  value={id}
                  primaryText={name}
                />)}
              </SelectField>
              <SelectField
                name="Position"
                placeholderText="Choose your Position"
                value={positionId}
                onChange={(value) => onChangeValue('positionId', value)}
                className="form__body-select-item"
              >
                {Positions.map(({ id, name }) => <SelectFieldItem key={id} value={id} primaryText={name} />)}
              </SelectField>
            </div>
            <div className="form__body-additional-info">
              <InputField
                value={highSchool}
                name="High School"
                placeholder="Type your high school"
                onChange={event => onChangeValue('highSchool', event.target.value)}
              />
              <DateSelector
                day={day}
                month={month}
                year={year}
                onSelect={onChangeValue}
                className="from__body-date-selector"
              />
              <GenderSelect
                value={gender}
                customGender={customGender}
                onClick={onChangeValue}
                className="from__body-gender-selector"
              />
            </div>
          </form>
        </div>
        <Footer />
      </div>
      <div className="splash-screen" />
    </div>
  </div>
);

export default Component;
