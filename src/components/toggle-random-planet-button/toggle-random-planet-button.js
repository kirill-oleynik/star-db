import React from 'react';
import './toggle-random-planet-button.css';

const ToggleRandomPlanetButton = ({ handleClick, state }) => {
  const label = state ? 'Hide' : 'Show';
  return(
    <button
     type="button"
     className="btn btn-warning"
     onClick = {handleClick}
     >
    {`${label} Random Plaanet`}
 </button>
  );
};
export default ToggleRandomPlanetButton;
