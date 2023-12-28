import React, { useRef, useState } from 'react';
import Form from './components/Form/Form';
import Task from './components/Task/Task';
import './App.css';

function App() {
  const [task, setTask] = useState([]);
  const [doneTask, setDoneTask] = useState('');
  const inputText = useRef('');

  const toggleChecked = (event) => {
    const targetId = +event.target.id;
    const targetElemIndex = task.findIndex((item) => item.id === targetId);
    if (targetElemIndex !== -1) {
      const updateTask = [...task];
      updateTask[targetElemIndex].done = !updateTask[targetElemIndex].done;
      setTask(updateTask);
      setDoneTask('done');
    }
  };

  const deleteTask = (event) => {
    const targetId = +event.target.id;
    const deleteTarget = task.filter((item) => item.id !== targetId);
    // setTask(deleteTarget);
    console.log(deleteTarget);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTask([
      ...task,
      {
        id: Date.now(),
        taskName: inputText.current.value,
        done: false,
      },
    ]);
    inputText.current.value = '';
  };

  return (
    <div className="App">
      <header></header>
      <div className="container">
        <div className="header-app">
          <span className="title-app">TODO</span>
          <button className="toggle-theme"></button>
        </div>
        <Form
          handleSubmit={handleSubmit}
          inputText={inputText}
          toggleChecked={toggleChecked}
        />
        <div className="task-container">
          <ol>
            {task.map((item) => (
              <Task
                key={item.id}
                id={item.id}
                taskDone={item.done}
                taskName={item.taskName}
                toggleChecked={toggleChecked}
                deleteTask={deleteTask}
                doneTask={doneTask}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
