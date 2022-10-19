import React from "react";
import ToDo from "./ToDo";

const ToDoList = () => {
  return (
    <section className="todo-container">
      <article className="todo-list">
        <ToDo />
      </article>
    </section>
  );
};

export default ToDoList;
