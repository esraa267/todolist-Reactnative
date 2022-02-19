import { useState } from "react";

import AddTodo from "./src/components/add-todo";
import Example2 from "./src/components/todos-list";
import { NativeBaseProvider, Center, Box } from "native-base";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setcount] = useState(0);

  const handleDelete = (index) => {
    const temp = todos.filter((_, itemI) => itemI !== index);
    setTodos(temp);
    console.log(temp);
    handleTodocheck(temp);
  };
  const todoAddHandler = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleStatusChange = (index) => {
    const newTodos = [...todos];

    newTodos[index].done = !newTodos[index].done;
    console.log(newTodos);
    setTodos(newTodos);
    handleTodocheck(newTodos);
  };
  const handleTodocheck = (todos) => {
    const temp = todos.filter((item) => item.done == true);
    setcount(temp.length);
  };
  return (
    

    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Center w="100%">
          <Box maxW="300" w="100%">
            <AddTodo onTodoAdd={todoAddHandler} count={count} />
            <Example2
              list={todos}
              onTodoDelete={handleDelete}
              onTodoChangeStatus={handleStatusChange}
              count={count}
            />
          </Box>
        </Center>
      </Center>
    </NativeBaseProvider>
  );
};
export default App;
