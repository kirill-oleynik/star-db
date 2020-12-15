import React from 'react';
import './error-indicator.css';
import ErrorImage from '../../images/error-image.png';

const ErrorIndicator = () => {
  return(
  <div className='error-indicator'>
    <img src={ErrorImage} alt="error image" />
    <p className='error-heading'> OH NO !!! </p>
    <p className='error-message'> Somenthing went wrong </p>
  </div>
  );
};
export default ErrorIndicator;
