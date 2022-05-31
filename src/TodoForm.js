import React from "react";
import {
  Paper,
  TextField,
  List,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

import useInput from "./hooks/useInput";
function TodoForm(props) {
  const { addTodo } = props;
  const [task, handleTask, resetTask] = useInput("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <List style={{ paddingTop: "0" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (task.length > 0) return addTodo(task), resetTask();
          }}
        >
          <ListItemText>
            <TextField
              value={task}
              onChange={handleTask}
              margin="normal"
              label="Add new todo"
              fullWidth
              variant="standard"
            />
            {/* <Button type="submit">Submit</Button> */}
          </ListItemText>
          <ListItemSecondaryAction style={{ right: "0px" }}>
            <IconButton onClick={resetTask} aria-label="reset task">
              <ClearIcon />
            </IconButton>
            <IconButton type="submit task">
              <CheckIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </form>
      </List>
    </Paper>
  );
}

export default TodoForm;
