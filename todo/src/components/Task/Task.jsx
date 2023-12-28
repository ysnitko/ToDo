import React from 'react';
import './Task.css';

const Task = ({
  taskDone,
  id,
  toggleChecked,
  taskName,
  doneTask,
  deleteTask,
}) => {
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
      <label
        className={taskDone ? `added-task + ${doneTask}` : 'added-task'}
        htmlFor={id}
      >
        {taskName}
      </label>
      <button className="delete-task" onClick={deleteTask}></button>
    </li>
  );
};

export default Task;
