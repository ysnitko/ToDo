import React from 'react';
import './InputField.css';

const InputField = () => {
  return (
    <div className="input-task-container" id="pattern1">
      <input className="active-tsk-indicator" type="radio" />
      <input
        className="task-field"
        type="text"
        placeholder="Create a new todo..."
      />
      ;
    </div>
  );
};

export default InputField;
