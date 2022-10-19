import React from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <div className="App">
      <h1>My ToDo List </h1>
      <Form />
      <ToDoList />
    </div>
  );
};

export default App;
