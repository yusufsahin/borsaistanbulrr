import React, { Component } from "react";

class TodoList extends Component {
  state = {
    todos: [],
    loading: true,
    error: null,
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Veri alınamadı");
        }
        return response.json();
      })
      .then((data) => this.setState({ todos: data, loading: false }))
      .catch((error) =>
        this.setState({ error: error.message, loading: false })
      );
  }

  render() {
    const { todos, loading, error } = this.state;
    if (loading) {
      return <p>Veri yükleniyor...</p>;
    }
    if (error) {
      return <p>Hata :{error}</p>;
    }

    return (
      <div>
        <h1>Todo Listesi</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} onClick={()=>console.log(todo)}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
