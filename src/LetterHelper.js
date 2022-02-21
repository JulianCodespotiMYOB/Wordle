import { States } from "./States";

function getCurrentLettersWithStates(currentRow, wordleWord) {
  currentRow.forEach((currentInputBox, index) => {
    if (letterIsCorrect(currentInputBox.letter, index, wordleWord)) {
      currentInputBox.state = States.Correct;
    } else if (letterIsIncorrect(currentInputBox.letter, wordleWord)) {
      currentInputBox.state = States.Incorrect;
    }
  });
  currentRow.forEach((currentInputBox, index) => {
    if (letterIsClose(currentInputBox.letter, index, wordleWord, currentRow)) {
      currentInputBox.state = States.Close;
    } else if (currentInputBox.state === "") {
      currentInputBox.state = States.Incorrect;
    }
  });
  return currentRow;
}

function letterIsCorrect(letter, index, wordleWord) {
  return letter === wordleWord[index];
}
function letterIsIncorrect(letter, wordleWord) {
  return !wordleWord.includes(letter);
}
function letterIsClose(letter, index, wordleWord, currentRow) {
  const amountOfCurrentLetterInWordleWord = letterOccurrenceInWordleWord(
    letter,
    wordleWord
  );
  return (
    wordleWord.includes(letter) &&
    wordleWord[index] !== letter &&
    lettersOccurrenceInCurrentRowByIndex(letter, index, currentRow) <
      amountOfCurrentLetterInWordleWord
  );
}

function lettersOccurrenceInCurrentRowByIndex(letter, index, currentRow) {
  const slicedWord = currentRow.slice(0, index);
  return slicedWord.filter(
    (currentInputBox) => currentInputBox.letter === letter
  ).length;
}
function letterOccurrenceInWordleWord(inputLetter, wordleWord) {
  return wordleWord.split("").filter((letter) => letter === inputLetter).length;
}
export { getCurrentLettersWithStates };
