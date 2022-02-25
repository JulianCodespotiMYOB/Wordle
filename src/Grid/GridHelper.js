function displayCurrentLetter(id, letterInputBoxes) {
  return letterInputBoxes[id] === undefined ? "" : letterInputBoxes[id].letter;
}
function displayBoxColours(id, letterInputBoxes) {
  return letterInputBoxes[id] === undefined ? "" : letterInputBoxes[id].state;
}
function displayBoxBorder(id, letterInputBoxes) {
  return letterInputBoxes[id] === undefined ? "#3a3a3d" : "#565758";
}
function removeLastInputtedLetter(letterInputBoxes, setLetterInputBoxes) {
  setLetterInputBoxes(letterInputBoxes.slice(0, -1));
}
function addInputtedLetterToRows(setLetterInputBoxes, key) {
  let inputBox = {
    letter: key,
    state: "",
  };
  setLetterInputBoxes((row) => [...row, inputBox]);
}
export {
  displayCurrentLetter,
  displayBoxColours,
  removeLastInputtedLetter,
  addInputtedLetterToRows,
  displayBoxBorder,
};
