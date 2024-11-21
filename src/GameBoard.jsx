import { initialGameArray, gameDataRow } from "./gameData";
import "./game-board.css";
import Cell from "./Cell";
import GameRow from "./GameRow";
import { useState } from "react";
import PlayerTurnCell from "./PlayerTurnCell";
function GameBoard() {
  const [gameArray, setGameArray] = useState(initialGameArray);
  const [winner, setWinner] = useState("none");
  const [playerTurn, setPlayerTurn] = useState(1);
  function populateGrid(discPlaced) {
    const newGameArray = structuredClone(gameArray);
    let turnPoss = false;
    let discRow = -1;
    let discCol = -1;
    for (let row = newGameArray.length - 1; row >= 0; row--) {
      if (newGameArray[row][discPlaced] === 0) {
        newGameArray[row][discPlaced] = playerTurn;
        turnPoss = true;
        discRow = row;
        discCol = discPlaced;
        break;
      }
    }
    if (turnPoss) {
      if (playerTurn === 1) setPlayerTurn(2);
      else setPlayerTurn(1);
      setGameArray(newGameArray);
      checkWon(newGameArray, discRow, discCol);
    } else {
      alert("Choose diff posn");
    }
    //check if won
  }
  function checkWon(newGameArray, discRow, discCol) {
    //left
    console.log("newturn");
    let horiz = 1;
    let vertic = 1;
    let diag1 = 1;
    let diag2 = 1;
    for (let i = discCol - 1; i >= 0; i--) {
      if (newGameArray[discRow][i] === playerTurn) horiz++;
      else break;
    }
    for (let i = discCol + 1; i < newGameArray[discRow].length; i++) {
      if (newGameArray[discRow][i] === playerTurn) horiz++;
      else break;
    }
    for (let i = discRow - 1; i >= 0; i--) {
      if (newGameArray[i][discCol] === playerTurn) vertic++;
      else break;
    }
    for (let i = discRow + 1; i < newGameArray.length; i++) {
      if (newGameArray[i][discCol] === playerTurn) vertic++;
      else break;
    }
    for (let i = discRow - 1, j = discCol - 1; i >= 0 && j >= 0; i--, j--) {
      if (newGameArray[i][j] === playerTurn) {
        diag1++;
        console.log(i, j, "match11");
      } else break;
    }
    for (
      let i = discRow + 1, j = discCol + 1;
      i < newGameArray.length && j < newGameArray[discRow].length;
      i++, j++
    ) {
      console.log(i, j, "whaaat", newGameArray.length);
      if (newGameArray[i][j] === playerTurn) {
        diag1++;
        console.log(i, j, "match12");
      } else break;
    }
    for (
      let i = discRow - 1, j = discCol + 1;
      i >= 0 && j < newGameArray[discRow].length;
      i--, j++
    ) {
      if (newGameArray[i][j] === playerTurn) {
        diag2++;
        console.log(i, j, "match22");
      } else break;
    }
    for (
      let i = discRow + 1, j = discCol - 1;
      i < newGameArray.length && j >= 0;
      i++, j--
    ) {
      if (newGameArray[i][j] === playerTurn) {
        diag2++;
        console.log(i, j, "match22");
      } else break;
    }
    console.log(discRow, discCol, horiz, vertic, diag1, diag2, "checwin");
    if (horiz >= 4 || vertic >= 4 || diag1 >= 4 || diag2 >= 4) {
      setWinner(playerTurn === 1 ? "yellow" : "red");
      //   alert("Winner", playerTurn);
    }
  }
  function restartGame() {
    setWinner("none");
    setGameArray(initialGameArray);
    setPlayerTurn(1);
  }
  return (
    <div className="board-parent">
      {winner === "none" && (
        <div className="row-1">
          {gameDataRow.map((item, index) => {
            return (
              <PlayerTurnCell
                key={index}
                playerTurn={playerTurn}
                setPlayerTurn={setPlayerTurn}
                populateGrid={populateGrid}
                discPlaced={index}
              />
            );
          })}
        </div>
      )}
      {winner !== "none" && (
        <div className="winning-row">
          {winner === "red" && <div className="red-winner">Winner</div>}
          {winner === "yellow" && <div className="yellow-winner">Winner</div>}
          <button onClick={restartGame}>Retry</button>
        </div>
      )}

      <div className="game-board">
        {gameArray.map((item, index) => {
          return (
            <GameRow
              key={index}
              item={item}
              playerTurn={playerTurn}
              setPlayerTurn={setPlayerTurn}
            />
          );
        })}
      </div>
    </div>
  );
}

export default GameBoard;
