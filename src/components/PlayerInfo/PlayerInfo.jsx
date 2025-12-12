import {useState} from "react";

export default function PlayerInfo({name, symbol, isActive}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function toggleIsEditing() {
    setIsEditing((editing) => !editing);
  }

  function onSetPlayerName(event) {
    setPlayerName(event.target.value);
  }

  return (<li className={isActive ? 'active' : ''}>
    <span className="player">
      {isEditing ? (<input type="text" required value={playerName} onChange={onSetPlayerName}/>) :
        (<span className="player-name">{playerName}</span>)}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={toggleIsEditing}>{isEditing ? 'Save' : 'Edit'}</button>
  </li>)
}
