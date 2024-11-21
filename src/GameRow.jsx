import Cell from "./Cell";

function GameRow({ item, playerTurn, setPlayerTurn }) {
  //   const gameRows = gameArray.map((itemArr, index1) => {
  //     const cellArr = itemArr.map((item, index2) => {
  //       return <Cell item={item} key={`${index1}${index2}`} />;
  //     });
  //     return cellArr;
  //   });
  //   console.log(item, "game-r");
  return (
    <div className="game-row">
      {item.map((item, index) => {
        return (
          <Cell
            item={item}
            key={index}
            row1={false}
            playerTurn={playerTurn}
            setPlayerTurn={setPlayerTurn}
          />
        );
      })}
    </div>
  );
}

export default GameRow;
