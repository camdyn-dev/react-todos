import React from "react";
import TodoEdit from "./TodoEdit";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import useToggle from "./hooks/useToggle";

function TodoItem(props) {
  const { task, completed, id, toggleTodo, editTodo, deleteTodo } = props;

  const [edit, toggleEdit] = useToggle(false);
  return (
    <>
      <ListItem style={{ height: "64px" }}>
        {!edit ? (
          <>
            <Checkbox
              tabIndex={-1}
              checked={completed}
              onClick={() => toggleTodo(id)}
            />
            <ListItemText
              style={{ textDecoration: completed && "line-through" }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton onClick={() => deleteTodo(id)} aria-label="delete">
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={toggleEdit}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        ) : (
          <TodoEdit
            editTodo={editTodo}
            id={id}
            toggleEdit={toggleEdit}
            originalTask={task}
          />
        )}
      </ListItem>
    </>
  );
}

export default TodoItem;
