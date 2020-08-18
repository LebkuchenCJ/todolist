import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import ListItemText from "./components/ListItemText";
import ListItemCheck from "./components/ListItemCheck";
import { getTodos, createTodo } from "./api/todos";
import ButtonPlus from "./components/ButtonPlus";

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };
    fetchData();
  }, []);

  /* const handleClick = () => {
    return alert("Test");
  }; */

  return (
    <div className="app">
      <header className="app__header">
        <h2>To Do List</h2>
      </header>
      <main className="app__main">
        <List>
          {todos?.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemIcon />
              <ListItemText title={todo.title} date={todo.date} />
              <ListItemCheck />
            </ListItem>
          ))}
        </List>
      </main>
      <footer className="app__footer">
        <ButtonPlus onClick={() => alert("Test")} />
      </footer>
    </div>
  );
}

export default App;
