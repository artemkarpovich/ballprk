import React from 'react';
import FlatButton from './../flatButton';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = () => (
  <header className="header">
    <div className="header__left-side">
      <Link className="header__ballprk-logo" to="/">
        ballprk
      </Link>
    </div>
    <div className="header__right-side">
      <FlatButton label="log out" />
    </div>
  </header>
);

export default Header;

// TODO: Will be in module folder, needs connect to store in future.
