import React, { useRef, useState } from 'react';
import Form from './components/Form/Form';
import Task from './components/Task/Task';
import './App.css';

function App() {
  const [checked, setChecked] = useState(false);
  const [task, setTask] = useState([]);
  const inputText = useRef('');

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTask([...task, inputText.current.value]);
    inputText.current.value = '';
    console.log(task);
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
          checked={checked}
        />
        <div className="task-container">
          <ol>
            {task.map((item, index) => (
              <Task key={index} task={item} toggleChecked={toggleChecked} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
