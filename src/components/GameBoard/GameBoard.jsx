export default function GameBoard({onSelectSquare, board}) {
  return (<ol id="game-board">
    {board.map((row, rowIndex) => (
      <li key={rowIndex}>
        <ol>{row.map((playerSymbol, itemIndex) => (<li key={itemIndex}>
          <button onClick={() => onSelectSquare(rowIndex, itemIndex)} disabled={!!playerSymbol}>{playerSymbol}</button>
        </li>))}
        </ol>
      </li>))}
  </ol>)
}
