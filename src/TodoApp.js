import React, { useEffect } from "react";
import useTodo from "./hooks/useTodo";
import { AppBar, Typography, Paper, Toolbar, Grid } from "@mui/material";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const initTodos =
    localStorage.getItem("todos").length > 2 //localStorage stores as a string, so it counts the 2 quotation marks
      ? JSON.parse(localStorage.getItem("todos"))
      : [
          { id: 1, task: "return the mac", completed: true },
          { id: 2, task: "baybayy", completed: true },
          { id: 3, task: "return of the macc", completed: false },
        ];

  const [todos, addTodo, editTodo, deleteTodo, toggleTodo] = useTodo(initTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
