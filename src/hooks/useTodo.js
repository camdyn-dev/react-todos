import useLocalStorage from "./useLocalStorage";

const useTodo = (initTodos) => {
  const [todos, setTodos] = useLocalStorage("todos", initTodos); //I don't really like adding another layer of complexity with using this hook, but the google man made it look good so

  const addTodo = (newTodoText) => {
    const newTodoId = todos.length ? todos[todos.length - 1].id + 1 : 1; //if there's already a task, use the last task id + 1, otherwise, use 1
    setTodos([
      ...todos,
      {
        id: newTodoId,
        task: newTodoText,
        completed: false,
      },
    ]);
  };

  const editTodo = (todoId, newTask) => {
    const newTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    //if the inputted todo is the same, change the text, otherwise return original
    setTodos(newTodos);
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const toggleTodo = (todoId) => {
    const newTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    //if the inputted todo is the same, flip the status of completed, otherwise, return original todo
    setTodos(newTodos);
  };

  return [todos, addTodo, editTodo, deleteTodo, toggleTodo];
};

export default useTodo;
