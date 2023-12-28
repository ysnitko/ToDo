import React from 'react';
import './Task.css';

const Task = ({ taskDone, id, toggleChecked, taskName }) => {
  return (
    <li className="pattern2">
      <input
        id={id}
        className="active-tsk-indicator"
        type="checkbox"
        name="tsk-indicator"
        checked={taskDone}
        onChange={toggleChecked}
      />
      <label className="added-task" htmlFor="tsk-indicator">
        {taskName}
      </label>
      <button className="delete-task"></button>
    </li>
  );
};

export default Task;
