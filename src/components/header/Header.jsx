import React from 'react';
import FlatButton from './../flatButton';

import './styles.css';

const Header = () => (
  <header className="header">
    <div className="header__left-side">
      <div className="header__ballprk-logo">
        ballprk
      </div>
    </div>
    <div className="header__right-side">
      <FlatButton label="log out" />
    </div>
  </header>
);

export default Header;

// TODO: Will be in module folder, needs connect to store in future.
