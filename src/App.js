import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getFromLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let receiveLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(receiveLocal);
    }
  };

  useEffect(() => {
    getFromLocal();
  }, []);

  useEffect(() => {
    handleFilter();
    saveToLocal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  return (
    <div className="App">
      <h1>My ToDo List </h1>
      <Form todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default App;
