import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <section className="todo-container">
      <article className="todo-list">
        {filteredTodos.map((todo) => (
          <ToDo
            key={todo.id}
            text={todo.text}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </article>
    </section>
  );
};

export default ToDoList;
