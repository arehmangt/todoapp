import React, { createContext, useReducer, useContext, useEffect } from "react";
import TodoService from "../services/TodoService";

const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return action.payload;
    case "TOGGLE_COMPLETE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "CREATE_TODO":
      const newTodo = {
        userId: 1,
        id: state.length + 1,
        title: action.payload,
        completed: false,
      };
      return [...state, newTodo];
    case "DELETE_TODO":
      return state.filter((item) => item.id !== action.payload);
    case "UPDATE_TODO":
      return state.map((item) =>
        item.id === action.payload.todo.id ? {...item,title: action.payload.title}: item,
      );
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await TodoService.fetchTodos();
      dispatch({ type: "SET_TODOS", payload: todos });
    };

    fetchTodos();
  }, []);

  const toggleComplete = async (todoId) => {
    // await TodoService.updateTodoStatus(
    //   todoId,
    //   !todos.find((todo) => todo.id === todoId).completed
    // );
    dispatch({ type: "TOGGLE_COMPLETE", payload: todoId });
  };
  const deleteTodo = (todoId) => {
    dispatch({ type: "DELETE_TODO", payload: todoId });
  };

  const addTodo = (title) => {
    dispatch({ type: "CREATE_TODO", payload: title });
  };
  const updateTodo = (todo,title) => {
    dispatch({ type: "UPDATE_TODO", payload: {todo,title} });
  };

  const contextValue = {
    todos,
    toggleComplete,
    deleteTodo,
    addTodo,
    updateTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};
