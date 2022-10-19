import React, { useState } from "react";

const Form = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputText = (e) => {
    console.log(e.target.value);
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
  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="form-input"
          value={inputText}
          onChange={handleInputText}
        />
        <button className="form-btn" type="submit">
          <i className="material-symbols-outlined">add</i>
        </button>
        <article className="select">
          <select name="todos" className="filter-todo">
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
