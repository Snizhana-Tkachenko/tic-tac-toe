import React from 'react';

const StartAgainButton = ({ onClick }) => {
  return (
    <button className="start-again-button" onClick={onClick}>
      Start Again
    </button>
  );
};

export default StartAgainButton;
