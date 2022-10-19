import React, { useState } from "react";

const Form = ({ todos, setTodos, setStatus }) => {
  const [inputText, setInputText] = useState("");

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  return (
    <section className="form-container">
      <form onSubmit={handleFormSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Add a task..."
          value={inputText}
          onChange={handleInputText}
        />
        <button className="form-btn" type="submit">
          <i className="material-symbols-outlined">add</i>
        </button>
        <article className="select">
          <select name="todos" className="filter-todo" onChange={handleStatus}>
            <option value="all">All</option>
            <option value="uncompleted">UnCompleted</option>
            <option value="completed">Completed</option>
          </select>
        </article>
      </form>
    </section>
  );
};

export default Form;
