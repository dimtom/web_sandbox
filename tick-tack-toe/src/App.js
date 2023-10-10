import './App.css';
import { useState } from 'react';


export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [cells, setCells] = useState(Array(9).fill(null));

  // History of moves!
  //const [history, setHistory] = useState([Array(9).fill(null)]);
  //const currentCells = history[history.length - 1];
  
  function handlePlay(next) {
    setCells(next);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setCells(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
<div className="game">
      <div className="game-board">
        {/*<Board xIsNext={xIsNext} squares={currentCells} onPlay={handlePlay}/>*/}

        <Board xIsNext={xIsNext} cells={cells} onPlay={handlePlay}/>

      </div>
      <div className="game-info">
        <button onClick={() => handleReset()}>Reset</button>
      </div>
    </div>);
}

function Cell({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

function Board({ xIsNext, cells, onPlay }) {
  // winner
  const winner = calculateWinner(cells);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  // click on the cell
  function handleClick(i) {
    // game ended, no more clicks allowed
    if (winner)
      return;

    // can not press again on a cell that is already marked by 'X' or 'O'
    if (cells[i])
      return;
    const next = cells.slice();

    if (xIsNext)
      next[i] = 'X';
    else
      next[i] = 'O';

      onPlay(next);

  }

  // board UI
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Cell value={cells[0]} onSquareClick={() => handleClick(0)} />
        <Cell value={cells[1]} onSquareClick={() => handleClick(1)} />
        <Cell value={cells[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Cell value={cells[3]} onSquareClick={() => handleClick(3)} />
        <Cell value={cells[4]} onSquareClick={() => handleClick(4)} />
        <Cell value={cells[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Cell value={cells[6]} onSquareClick={() => handleClick(6)} />
        <Cell value={cells[7]} onSquareClick={() => handleClick(7)} />
        <Cell value={cells[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(cells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}
