import React from "react";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="header-app">
            <span className="title-app">TODO</span>
            <button className="toggle-theme"></button>
          </div>
          <Form />
        </div>
      </header>
    </div>
  );
}

export default App;
