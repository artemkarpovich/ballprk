import React from 'react';

import './styles.css';

const Header = () => (
  <header className="header">
    <div className="header__left-side">
      <div className="header__ballprk-logo">
        ballprk
      </div>
    </div>
    <div className="header__right-side">
      <div className="button logout">
        log out
      </div>
    </div>
  </header>
);

export default Header;
