import React, { useState } from "react";
import { useTodos } from "./TodosContext";

const AddTodo = () => {
  const [title, setTitle] = useState();
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new todo"
        value={title}
     
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
