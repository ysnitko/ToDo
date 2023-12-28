import React, { useRef, useState } from "react";
import Form from "./components/Form/Form";
import Task from "./components/Task/Task";
import "./App.css";

function App() {
  const [doneTask, setDoneTask] = useState(false);
  const [task, setTask] = useState([]);
  const inputText = useRef("");

  const toggleChecked = (id) => {
    // const targetId = Number(event.target.id);
    // console.log(targetId);
    const targeDone = task.find((item) => item.id === id);
    targeDone.done = !targeDone.done;
    setDoneTask(targeDone.done);
    console.log(targeDone);

    // targeDone.done = !targeDone.done;
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
    inputText.current.value = "";
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
