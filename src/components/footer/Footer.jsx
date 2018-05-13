import React from 'react';
import FlatButton from './../flatButton';

import './styles.css';

const Footer = ({ onClick }) => (
  <div className="footer">
    <FlatButton label="Next" className="footer__flat-button" onClick={onClick} />
  </div>
);

export default Footer;
