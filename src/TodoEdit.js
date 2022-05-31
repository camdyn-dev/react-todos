import React from "react";
import { TextField } from "@mui/material";

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
      style={{ width: "100%" }}
    >
      <TextField margin="normal" value={edit} onChange={handleEdit} fullWidth />
    </form>
  );
}

export default TodoEdit;
