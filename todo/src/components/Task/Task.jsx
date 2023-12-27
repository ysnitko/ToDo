import React from "react";
import "./Task.css";

const Task = ({ task }) => {
  return (
    <li className="pattern2">
      <input
        className="active-tsk-indicator"
        type="radio"
        name="tsk-indicator"
      />
      <label className="added-task" htmlFor="tsk-indicator">
        {task}
      </label>
    </li>
  );
};

export default Task;
