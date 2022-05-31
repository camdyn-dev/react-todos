import React from "react";
import {
  TextField,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

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
          //   style={{ width: "85%" }} : the below doesn't look bad, honestly, and makes the above todo thing easier
          variant="standard"
          fullWidth
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={toggleEdit} aria-label="cancel edit">
          <ClearIcon />
        </IconButton>
        <IconButton type="submit" aria-label="confirm edit">
          <CheckIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </form>
  );
}

export default TodoEdit;
