import React from "react";
import { Paper, TextField, Button } from "@mui/material";
import useInput from "./hooks/useInput";
function TodoForm(props) {
  const { addTodo } = props;
  const [task, handleTask, resetTask] = useInput("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          return e.preventDefault(), addTodo(task), resetTask();
        }}
      >
        <TextField
          value={task}
          onChange={handleTask}
          margin="normal"
          label="Add new todo"
          fullWidth
        />
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Paper>
  );
}

export default TodoForm;
