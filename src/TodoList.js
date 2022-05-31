import React from "react";
import TodoItem from "./TodoItem";
import { Paper, List, ListItem, Divider } from "@mui/material";
function TodoList(props) {
  const { todos, editTodo, deleteTodo, toggleTodo } = props;
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <React.Fragment key={todo.task}>
            {" "}
            {/* react kept throwing errors with this not having a key */}
            <TodoItem
              {...todo}
              key={todo.id}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
            {i < todos.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
