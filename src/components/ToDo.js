import React from "react";

const ToDo = ({ text, todo, todos, setTodos }) => {
  // FIX
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const handleCompleted = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        console.log(item);
        return item;
      })
    );
  };
  return (
    <ul className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
        <button className="">
          <i className="material-symbols-outlined" onClick={handleCompleted}>
            check
          </i>
        </button>
        <button className="" onClick={handleDelete}>
          <i className="material-symbols-outlined">delete</i>
        </button>
      </li>
    </ul>
  );
};

export default ToDo;
