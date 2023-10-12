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

  function handleUndo() {
    // TODO: implement
  }

  function handleRedo() {
    // TODO: implement
  }

  return (
    <div className="game">
        <Board xIsNext={xIsNext} cells={cells} onPlay={handlePlay} />
      <div className="game-buttons">
        <button onClick={handleUndo}> &lt;&lt;</button>
        <button onClick={() => handleReset()}>Reset</button>
        <button onClick={handleRedo}> &gt;&gt; </button>
      </div>
    </div>);
}

function Cell({ value, onSquareClick }) {
  return <button className="cell" onClick={onSquareClick}>{value}</button>;
}



function Board({ xIsNext, cells, onPlay }) {
  // winner
  const winner = calculateWinner(cells);
  let status = statusText(winner, xIsNext)


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

  function populate_cells() {
    const rows = [0, 1, 2];
    const cols = [0, 1, 2];
    const row_count = rows.length;
    let items = rows.map((row_id) => {
      let line_items = cols.map((col_id) => {
        const cell_id = row_count * row_id + col_id;
        return <Cell value={cells[cell_id]} onSquareClick={() => handleClick(cell_id)} />
      });

      return (
        <div className="board-row">
          {line_items}
        </div>);
    });

    return items;
  }

  // board UI
  let items = populate_cells();
  return (
    <>
      <div className="board">
        <div className="board-status">{status}</div>
        <div className="board-table">
        {items}
        </div>
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

function statusText(winner, xIsNext) {
  let status = (winner) ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O");
  return status
}
