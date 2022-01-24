import React from 'react';
import IconContainer from '../UI/IconContainer/IconContainer';

const Stop = ({event}) => {
  return <IconContainer onClick={event}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
  </IconContainer>;
};

export default Stop;
