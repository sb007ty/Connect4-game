import { useState } from "react";

function Cell({ item, playerTurn, setPlayerTurn }) {
  let clName = "game-cell ";
  if (item === 0) clName += "w-bg";
  if (item === 1) clName += "y-bg";
  if (item === 2) clName += "r-bg";

  return <div className={clName}></div>;
}

export default Cell;
