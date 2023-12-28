import React from "react";
import "./Task.css";

const Task = ({ taskDone, id, toggleChecked, taskName, doneTask }) => {
  return (
    <li className="pattern2">
      <input
        id={id}
        className="active-tsk-indicator"
        type="checkbox"
        name="tsk-indicator"
        checked={taskDone}
        onChange={() => toggleChecked(id)}
      />
      <label className="added-task" htmlFor="tsk-indicator">
        {taskName}
      </label>
      <button className="delete-task"></button>
    </li>
  );
};

export default Task;
