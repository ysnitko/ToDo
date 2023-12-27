import React from "react";
import InputField from "../InputField/InputField";
import "./Form.css";

const Form = ({ handleSubmit, inputText, toggleChecked, checked }) => {
  return (
    <form onSubmit={handleSubmit}>
      <InputField
        inputText={inputText}
        toggleChecked={toggleChecked}
        checked={checked}
      />
    </form>
  );
};

export default Form;
