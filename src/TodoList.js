import React from "react";
import TodoItem from "./TodoItem";
import { Paper, List, ListItem, Divider } from "@mui/material";
function TodoList(props) {
  const { todos, editTodo, deleteTodo, toggleTodo } = props;
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <TodoItem
            {...todo}
            key={todo.id}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
