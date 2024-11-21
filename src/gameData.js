const gameDataRow = new Array(7).fill(0);
const initialGameArray = [];
for (let i = 0; i < 6; i++) {
  initialGameArray.push([...gameDataRow]);
}
export { initialGameArray, gameDataRow };
