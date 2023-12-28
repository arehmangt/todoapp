import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const { addTodo } = useTodoContext();
  const [input, setInput] = useState("");
  const handleChange = (evt) => {
    setInput(evt.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };
  return (
    <form className="NewTodoForm" onSubmit={onSubmit}>
      <label htmlFor="task">New todo</label>
      <input
        value={input}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
      />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
