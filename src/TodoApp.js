import React, { useState } from "react";
import { AppBar, Typography, Paper, Toolbar, Grid } from "@mui/material";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const initTodos = [
    { id: 1, task: "fart", completed: true },
    { id: 2, task: "shit", completed: true },
    { id: 3, task: "find love", completed: false },
  ];

  const [todos, setTodos] = useState(initTodos);

  const addTodo = (newTodoText) => {
    const newTodoId = todos.length ? todos[todos.length - 1].id + 1 : 1; //if there's already a task, use the last task id + 1, otherwise, use 1
    setTodos([
      ...todos,
      {
        id: newTodoId,
        task: newTodoText,
        completed: false,
      },
    ]);
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const toggleTodo = (todoId) => {
    const newTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    //if the inputted todo is the same, flip the status of completed, otherwise, return original todo
    setTodos(newTodos);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS with hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent={"center"} style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
