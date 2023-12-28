import React from "react";
import InputField from "../InputField/InputField";
import "./Form.css";

const Form = ({ handleSubmit, inputText }) => {
  return (
    <form onSubmit={handleSubmit}>
      <InputField inputText={inputText} />
    </form>
  );
};

export default Form;
