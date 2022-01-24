import React from 'react';
import './Container.css'

const Container = (props) => {
  let design ='box ' + props.className
  return <div className={design}>{props.children}</div>;
};

export default Container;
