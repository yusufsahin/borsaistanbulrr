import React from "react";
import { useTodos } from "./TodosContext";

const Todos = () => {
  const { todos, loading } = useTodos();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Todos</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Todos;
