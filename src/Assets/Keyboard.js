import React from "react";
export function Keyboard(props) {
  function GetKeyState(key) {
    let stateToReturn = "";
    props.letterInputBoxes.forEach((inputBox) => {
      if (inputBox.letter === key.toLowerCase()) {
        stateToReturn = inputBox.state;
      }
    });
    return stateToReturn;
  }
  function KeyIcon(Key, className = "KeyIcon") {
    return (
      <input
        className={className}
        type="text"
        value={Key.toUpperCase()}
        readOnly={true}
        onClick={() => {
          props.handleChange(Key);
        }}
        style={{ cursor: "pointer", backgroundColor: GetKeyState(Key) }}
      />
    );
  }
  function TopKeyboardRow() {
    const topRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    return topRow.map((key) => {
      return KeyIcon(key);
    });
  }
  function MiddleKeyboardRow() {
    const middleRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    return middleRow.map((key) => {
      return KeyIcon(key);
    });
  }
  function BottomKeyboardRow() {
    const bottomRow = ["z", "x", "c", "v", "b", "n", "m"];
    return bottomRow.map((key) => {
      return KeyIcon(key);
    });
  }
  function BackspaceKey() {
    return KeyIcon("Backspace", "BackspaceKey");
  }
  function EnterKey() {
    return KeyIcon("Enter", "EnterKey");
  }
  return (
    <div className={"Keyboard"}>
      <div className={"TopRow"}>{TopKeyboardRow()}</div>
      <div className={"MiddleRow"}>{MiddleKeyboardRow()}</div>
      <div className={"BottomRow"}>
        {EnterKey()}
        {BottomKeyboardRow()}
        {BackspaceKey()}
      </div>
    </div>
  );
}
