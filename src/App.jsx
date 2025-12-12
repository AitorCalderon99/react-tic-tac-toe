import PlayerInfo from "./components/PlayerInfo/PlayerInfo.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log/Log.jsx";
import {WINNING_COMBINATIONS} from "./components/winning-combinations.js";

const initialGameBoard = [[null, null, null], [null, null, null], [null, null, null]]

function deriveActivePlayer(gameTurns) {
  return gameTurns[0]?.player === 'X' ? 'O' : 'X';
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = initialGameBoard;
  let winner = null;

  for (let turn of gameTurns) {
    gameBoard[turn.square.row][turn.square.col] = turn.player;
  }

  for (let combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      return [{square: {row: rowIndex, col: colIndex}, player: activePlayer}, ...prevTurns];
    })
  }

  return (<main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <PlayerInfo name="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
        <PlayerInfo name="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
      </ol>
      {winner && <p>You won, {winner}!</p>}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
    </div>
    <Log turns={gameTurns}/>
  </main>)
}

export default App
