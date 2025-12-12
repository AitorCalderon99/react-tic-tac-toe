import PlayerInfo from "./components/PlayerInfo/PlayerInfo.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import {useState} from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
  }

  return (<main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <PlayerInfo name="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
        <PlayerInfo name="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
    </div>
  </main>)
}

export default App
