import React from 'react';
import './Button.css'

const Button = ({title, activeClass, event }) => {
  return <button className={activeClass} onClick={event}>{title}</button>;
};

export default Button;
