import React from 'react';
import './IconContainer.css'

const IconContainer = (props) => {
  let i = `iconCon ${props.className}`
  return <div className={i}>{props.children}</div>;
};

export default IconContainer;
