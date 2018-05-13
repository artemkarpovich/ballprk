import React from 'react';
import { Link } from 'react-router-dom';
import NavUpIcon from './../../assets/images/icNavUp.svg';

import './styles.css';

const LinkButton = ({ text, className, ...props }) => (
  <Link className={`link-button ${className ? className : ''}`} {...props}>
    <img className="link-button__nav-up-icon" src={NavUpIcon} alt="nav-up-icon"/>
    {text}
  </Link>
);

export default LinkButton;
