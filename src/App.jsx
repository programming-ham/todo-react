import {useState} from "react";
import "./style/main.css";
import {nanoid} from "nanoid";
import Title from "./Title";
import Form from "./Form";
import List from "./List";

const App = () => {
  const [todos, setTodos] = useState([]);

  // const [filter, setFilter] = useState("ALL");

  const addTodo = (text) => {
    setTodos([...todos, {content: text, id: nanoid()}])
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <Title />
      <Form addTodo = {addTodo}/>
      <List
        todos = {todos}
        deleteTodo = {deleteTodo}
      />

    </>
  );
};


export default App;