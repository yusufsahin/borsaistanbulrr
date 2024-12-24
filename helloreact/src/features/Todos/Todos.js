import React from "react";
import { useTodos } from "./TodosContext";

const Todos = () => {
  const { todos, loading ,updateTodo,deleteTodo} = useTodos();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Todos</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} 
            onChange={()=>updateTodo(todo.id,{completed: !todo.completed})}
            />
            {todo.title}
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todos;
