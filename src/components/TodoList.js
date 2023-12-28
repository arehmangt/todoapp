import React from "react";
import TodoItem from "./TodoItem";
import { useTodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos, toggleComplete, deleteTodo, updateTodo } =
    useTodoContext();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={toggleComplete}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
