import "./App.css";
import { WordList } from "./WordList";
import { useState } from "react";
import { WordleGrid } from "./CreateWordleGrid";
import { getCurrentLettersWithStates } from "./LetterHelper";
import {
  removeLastInputtedLetter,
  addInputtedLetterToRows,
} from "./GridHelper";
import { CreateHeader } from "./CreateHeader";

function App() {
  const [wordleWord, setWordleWord] = useState(null);

  const inputBox = {
    letter: "",
    state: "",
  };

  if (!wordleWord) {
    const word = WordList[Math.floor(Math.random() * WordList.length)];
    setWordleWord(word);
  }
  const [letterInputBoxes, setLetterInputBoxes] = useState([]);
  const [currentRowIndex, setCurrentRowIndex] = useState(0);
  const [currentColumnIndex, setCurrentColumnIndex] = useState(0);

  const getCurrentRow = () => {
    const indexOfCurrentRow = currentRowIndex * 5;
    return letterInputBoxes.slice(indexOfCurrentRow, indexOfCurrentRow + 5);
  };

  const inputRequiresConfirmation =
    currentColumnIndex % 5 === 0 && currentColumnIndex !== 0;

  function handleChange(event) {
    inputBox.letter = event.key.toLowerCase();
    const regexMatch = /[a-z]/i.test(inputBox.letter);

    if (inputRequiresConfirmation) {
      if (event.key === "Enter") {
        if (!checkIfWordIsApplicable()) {
          alert("Word is not applicable");
          return;
        }
        setStatesOfLettersInCurrentRow();
        checkIfWordIsCorrect();
        setCurrentRowIndex((prevState) => prevState + 1);
        setCurrentColumnIndex(0);
      } else if (event.key === "Backspace") {
        removeLastInputtedLetter(letterInputBoxes, setLetterInputBoxes);
        setCurrentColumnIndex((prevState) => prevState - 1);
      }
    } else if (event.key === "Backspace" && currentColumnIndex !== 0) {
      console.log("backspace");
      removeLastInputtedLetter(letterInputBoxes, setLetterInputBoxes);
      setCurrentColumnIndex((prevState) => prevState - 1);
    } else if (regexMatch && event.key.length === 1) {
      addInputtedLetterToRows(setLetterInputBoxes, inputBox);
      setCurrentColumnIndex((prevState) => prevState + 1);
    }
  }

  function checkIfWordIsCorrect() {
    const word = getCurrentRow()
      .map((letter) => letter.letter)
      .join("");
    console.log(word);
    word === wordleWord ? alert("Correct!") : console.log("Incorrect Word!");
  }

  function setStatesOfLettersInCurrentRow() {
    const currentRow = getCurrentRow();
    const currentRowWithStates = getCurrentLettersWithStates(
      currentRow,
      wordleWord
    );
    setLetterInputBoxes(
      letterInputBoxes.slice(0, -5).concat(currentRowWithStates)
    );
  }

  function checkIfWordIsApplicable() {
    const word = getCurrentRow()
      .map((letter) => letter.letter)
      .join("");
    return WordList.includes(word);
  }

  return (
    <div className="App" onKeyDown={handleChange} tabIndex={"0"}>
      <CreateHeader className="App-header" text="Wordle" />
      <WordleGrid letterInputBoxes={letterInputBoxes} />
    </div>
  );
}

export default App;
