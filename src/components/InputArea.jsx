import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={(event) => {
          const newValue = event.target.value;
          props.handleChange(newValue);
        }}
        type="text"
        value={props.inputText}
      />
      <button
        onClick={() => {
          props.addItem();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
