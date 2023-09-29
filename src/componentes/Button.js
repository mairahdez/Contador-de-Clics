import React from 'react';
import '../styleSheet/Button.css';

function Button({ texto, isClickButton, manageClick}) {
  return(
    <button 
    className={ isClickButton ? 'button-click' : 'restart-button' }
    onClick={manageClick}>
        {texto}
    </button>
  );
}

export default Button