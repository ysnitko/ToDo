import React, { useEffect, useRef, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import Form from './components/Form/Form';
import Task from './components/Task/Task';
import './App.css';

function App() {
  const [task, setTask] = useState([]);
  const [doneTask, setDoneTask] = useState('');
  const inputText = useRef('');
  const [renderTask, setRenderTask] = useState([...task]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [switchTheme, setSwitchTheme] = useState('dark');
  const [toggleTheme, setToggleTheme] = useState(false);

  useEffect(() => {
    setRenderTask([...task]);
  }, [task]);

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

  const toggleThemeTodo = (theme) => {
    setToggleTheme(!toggleTheme);
    setSwitchTheme(theme);
  };

  const deleteTask = (id) => {
    const deleteTask = task.filter((item) => item.id !== id);
    setTask([...deleteTask]);
    setRenderTask([...deleteTask]);
  };

  const deleteCompletedTask = () => {
    let findElem = task.filter((item) => item.done !== true);
    setTask([...findElem]);
  };

  const showOnlyActive = (tasks) => {
    const allTasks = [...tasks];
    const activeTasks = allTasks.filter((item) => item.done === false);
    if (activeTasks.length === 0) {
      setRenderTask([...task]);
    } else {
      setRenderTask([...activeTasks]);
    }
    setActiveFilter('active');
  };

  const showOnlyCompleted = (tasks) => {
    const allTasks = [...tasks];
    const completedTasks = allTasks.filter((item) => item.done === true);
    console.log(completedTasks.length);
    if (completedTasks.length === 0) {
      setRenderTask([...task]);
    } else {
      setRenderTask([...completedTasks]);
    }
    setActiveFilter('completed');
  };

  const showAllTasks = () => {
    setRenderTask([...task]);
    setActiveFilter('all');
  };

  const highlightButton = (filter) => {
    return activeFilter === filter ? 'active' : '';
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

  const countActiveTask = () => {
    let count = 0;
    for (let index = 0; index < task.length; index++) {
      const element = task[index];
      if (element.done === false) {
        count++;
      }
    }
    return count;
  };

  return (
    <div
      className={toggleTheme ? `App ${switchTheme}-theme` : `App dark-theme`}
    >
      <header></header>
      <main className="container">
        <div className="header-app">
          <span className="title-app">TODO</span>
          <button
            className="toggle-theme"
            title="toggle theme"
            onClick={() => toggleThemeTodo('white')}
          ></button>
        </div>
        <Form
          handleSubmit={handleSubmit}
          inputText={inputText}
          toggleChecked={toggleChecked}
        />
        <div className="task-container">
          <ol>
            <ReactSortable
              list={renderTask}
              setList={setRenderTask}
              multiDrag
              swap
            >
              {renderTask.map((item) => (
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
            </ReactSortable>
          </ol>
          {renderTask.length > 0 && (
            <div className="filter-container">
              <span className="task-left-count">
                {countActiveTask()} items left
              </span>
              <div className="filter-buttons">
                <button
                  className={highlightButton('all')}
                  onClick={showAllTasks}
                >
                  All
                </button>
                <button
                  className={highlightButton('active')}
                  onClick={() => showOnlyActive(task)}
                >
                  Active
                </button>
                <button
                  className={highlightButton('completed')}
                  onClick={() => showOnlyCompleted(task)}
                >
                  Completed
                </button>
              </div>
              <button
                className="clear-completed-task"
                onClick={deleteCompletedTask}
              >
                Clear Completed
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
