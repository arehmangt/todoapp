import React, { useState } from "react";

const TodoItem = ({ todo, onToggleComplete, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.title);
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
  const handleChange = (evt) => {
    setTask(evt.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    updateTodo(todo, task);
    setIsEditing(false);
  };
  if (isEditing) {
    return (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={onSubmit}>
          <input onChange={handleChange} value={task} type="text" />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="Todo">
        <li
          id={todo.id}
          onClick={() => onToggleComplete(todo.id)}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.title}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleFrom}>
            <i className="fas fa-pen" />
          </button>
          <button onClick={() => deleteTodo(todo.id)}>
            <i id={todo.id} className="fas fa-trash" />
          </button>
        </div>
      </div>
    );
  }
};

export default TodoItem;
