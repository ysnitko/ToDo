import React from 'react';
import './InputField.css';

const InputField = ({ inputText }) => {
  return (
    <div className="input-task-container" id="pattern1">
      <input className="active-tsk-indicator" type="checkbox" />
      <input
        className="task-field"
        type="text"
        placeholder="Create a new todo..."
        ref={inputText}
        required
      />
    </div>
  );
};

export default InputField;
