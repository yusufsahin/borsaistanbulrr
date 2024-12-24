import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
//Create Context
const TodosContext = createContext();

//Provider Component

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTodos(response.data);
      } catch (error) {
        console.log("Error fetching todos : ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (title) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          title,
          completed: false,
          userId: 1,
        }
      );
      setTodos((prevTodos) => [response.data, ...prevTodos]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const updateTodo = async (id, updatedData) => {
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        updatedData
      );
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, ...updatedData } : todo
        )
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <TodosContext.Provider value={{ todos, loading, addTodo, updateTodo,deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

//Custom Hook

export const useTodos = () => useContext(TodosContext);
