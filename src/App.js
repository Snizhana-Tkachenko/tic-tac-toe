import React, { useState } from 'react';
import StartAgainButton from './component/StartAgainButton';
import BoardSizeInput from './component/SizeInput';
import './App.css';


const TicTacToe = () => {
  const [boardSize, setBoardSize] = useState(3);
  const [board, setBoard] = useState(Array(boardSize * boardSize).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const handleStartAgain = () => {
    setBoard(Array(boardSize * boardSize).fill(null));
    setXIsNext(true);
  };

  const handleBoardSizeChange = (newSize) => {
    setBoardSize(newSize);
    setBoard(Array(newSize * newSize).fill(null));
    setXIsNext(true);
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const winner = calculateWinner(board);
  let status;
  let startAgainButton = null;

  if (winner) {
    status = `Winner: ${winner}`;
    startAgainButton = <StartAgainButton onClick={handleStartAgain} />;
  } else if (board.every((square) => square !== null)) {
    status = 'It\'s a draw!';
    startAgainButton = <StartAgainButton onClick={handleStartAgain} />;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game">
      <BoardSizeInput onSizeChange={handleBoardSizeChange} />
      <div className="game-board">
        {Array.from({ length: boardSize }).map((_, rowIndex) => (
          <div key={rowIndex} className="board-row">
            {Array.from({ length: boardSize }).map((_, colIndex) => (
              renderSquare(rowIndex * boardSize + colIndex)
            ))}
          </div>
        ))}
      </div>
      <div className="game-info">
        <div>{status}</div>
        {startAgainButton}
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of winningLines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default TicTacToe;

