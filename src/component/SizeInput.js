import React, { useState } from 'react';

const BoardSizeInput = ({ onSizeChange }) => {
  const [size, setSize] = useState(3);

  const handleInputChange = (event) => {
    const newSize = parseInt(event.target.value);
    if (!isNaN(newSize) && newSize >= 3 && newSize <= 10) {
      setSize(newSize);
      onSizeChange(newSize);
    }
  };

  return (
    <div className="board-size-input">
      <label htmlFor="boardSize">Board Size:</label>
      <input
        type="number"
        id="boardSize"
        value={size}
        min="3"
        max="10"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default BoardSizeInput;
