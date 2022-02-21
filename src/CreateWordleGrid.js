import React from "react";
import {
  displayCurrentLetter,
  displayBoxColours,
  displayBoxBorder,
} from "./GridHelper";

export function WordleGrid(props) {
  function createSingleInputBox(id) {
    return (
      <div>
        <input
          type="text"
          className={"Box"}
          disabled={true}
          style={{
            backgroundColor: displayBoxColours(id, props.letterInputBoxes),
            border: "2px solid" + displayBoxBorder(id, props.letterInputBoxes),
          }}
          value={displayCurrentLetter(id, props.letterInputBoxes).toUpperCase()}
        />
      </div>
    );
  }

  function createInputBoxRow(id) {
    let inputBoxes = [];
    for (let i = 0; i < 5; i++) {
      inputBoxes.push(createSingleInputBox(i + id * 5));
    }
    return <div className={"RowOfBoxes"}>{inputBoxes}</div>;
  }

  function CreateWordleGrid() {
    let inputBoxes = [];
    for (let i = 0; i < 6; i++) {
      inputBoxes.push(createInputBoxRow(i));
    }
    return <div className={"GridOfBoxes"}>{inputBoxes}</div>;
  }

  return <div>{CreateWordleGrid()}</div>;
}
