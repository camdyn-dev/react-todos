import React from "react";
import {
  ListItem,
  ListItemText,
  Divider,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function TodoItem(props) {
  const { task, completed, id, toggleTodo, deleteTodo } = props;
  return (
    <>
      <ListItem>
        <Checkbox
          tabIndex={-1}
          checked={completed}
          onClick={() => toggleTodo(id)}
        />
        <ListItemText style={{ textDecoration: completed && "line-through" }}>
          {task}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton onClick={() => deleteTodo(id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => alert("shart")}>
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
}

export default TodoItem;
