import React from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { TodoProvider } from "../context/TodoContext";

const TodoApp = () => {
  return (
    <TodoProvider>
      <div className="TodoList">
        <h1>
          Todo List <span>A Simple Todo List App</span>
        </h1>
        <TodoList />
        <TodoForm />
      </div>
    </TodoProvider>
  );
};

export default TodoApp;
