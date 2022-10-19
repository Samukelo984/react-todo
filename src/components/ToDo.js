import React from "react";

const ToDo = () => {
  return (
    <ul className="todo">
      <li className="todo-item">
        First Todo item
        <button className="">
          <i className="material-symbols-outlined">add_circle</i>
        </button>
        <button className="">
          <i className="material-symbols-outlined">delete</i>
        </button>
      </li>
    </ul>
  );
};

export default ToDo;
