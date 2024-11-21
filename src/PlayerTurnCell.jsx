import { useState } from "react";
function PlayerTurnCell({
  playerTurn,
  setPlayerTurn,
  populateGrid,
  discPlaced,
}) {
  const [hover, setHover] = useState(false);
  function clickCell() {
    //populate the cell and change player turn
    populateGrid(discPlaced);
  }
  function mouseEnterCell() {
    console.log("mousen");
    setHover(true);
  }
  function mouseLeaveCell() {
    console.log("mouseleave");
    setHover(false);
  }
  let selCellCl = "sel-cell ";
  if (hover) {
    if (playerTurn === 1) selCellCl += "y-hover";
    if (playerTurn === 2) selCellCl += "r-hover";
  }
  return (
    <div
      className={selCellCl}
      onClick={clickCell}
      onMouseEnter={mouseEnterCell}
      onMouseLeave={mouseLeaveCell}
    ></div>
  );
}

export default PlayerTurnCell;
