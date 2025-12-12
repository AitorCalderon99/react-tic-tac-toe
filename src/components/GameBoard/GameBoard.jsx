import {useState} from "react";

const initialGameBoard = [[null, null, null], [null, null, null], [null, null, null]]

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, itemIndex) {
    setGameBoard((prevGameBoard) => {
      let newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
      newGameBoard[rowIndex][itemIndex] = activePlayerSymbol;

      return newGameBoard;
    })

    onSelectSquare();
  }

  return (<ol id="game-board">
    {gameBoard.map((row, rowIndex) => (
      <li key={rowIndex}>
        <ol>{row.map((item, itemIndex) => (<li key={itemIndex}>
          <button onClick={() => handleSelectSquare(rowIndex, itemIndex)}>{item}</button>
        </li>))}
        </ol>
      </li>))}
  </ol>)
}
