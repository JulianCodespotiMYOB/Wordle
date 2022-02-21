import { getCurrentLettersWithStates } from "./LetterHelper";
import { States } from "./States";

describe("Wordle app where one guess has been made", () => {
  const inputBox1 = {
    letter: "c",
    state: "",
  };
  const inputBox2 = {
    letter: "r",
    state: "",
  };
  const inputBox3 = {
    letter: "a",
    state: "",
  };
  const inputBox4 = {
    letter: "n",
    state: "",
  };
  const inputBox5 = {
    letter: "e",
    state: "",
  };
  const letterInputBoxes = [
    inputBox1,
    inputBox2,
    inputBox3,
    inputBox4,
    inputBox5,
  ];
  const wordleWord = "creep";
  const currentRow = letterInputBoxes;

  it("the guess 'c' should have the state CORRECT", () => {
    //ARRANGE
    const expected = States.Correct;
    //ACT
    const actual = getCurrentLettersWithStates(
      letterInputBoxes,
      wordleWord,
      currentRow
    )[0].state;
    //ASSERT
    expect(actual).toEqual(expected);
  });

  it("the guess 'e' should have the state CLOSE", () => {
    //ARRANGE
    const expected = States.Close;
    //ACT
    const actual = getCurrentLettersWithStates(
      letterInputBoxes,
      wordleWord,
      currentRow
    )[4].state;
    //ASSERT
    expect(actual).toEqual(expected);
  });

  it("the guess 'a' should have the state INCORRECT", () => {
    //ARRANGE
    const expected = States.Incorrect;
    //ACT
    const actual = getCurrentLettersWithStates(
      letterInputBoxes,
      wordleWord,
      currentRow
    )[2].state;
    //ASSERT
    expect(actual).toEqual(expected);
  });
});
