import React from "react";
import {
  TextField,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";

import useInput from "./hooks/useInput";

function TodoEdit(props) {
  const { editTodo, id, toggleEdit, originalTask } = props; //if I have to type edit todo one more time I will commit a crime
  const [edit, handleEdit, resetEdit] = useInput(originalTask);
  return (
    <form
      onSubmit={(e) => {
        return (
          e.preventDefault(), editTodo(id, edit), resetEdit(), toggleEdit()
        );
      }}
      style={{ marginLeft: "1rem", width: "100%" }}
    >
      <ListItemText>
        <TextField
          value={edit}
          onChange={handleEdit}
          autoFocus
          style={{ width: "85%" }}
          variant="standard"
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={toggleEdit}>
          <CancelIcon />
        </IconButton>
        <IconButton type="submit">
          <CheckIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </form>
  );
}

export default TodoEdit;
