import {useState} from "react";
import "./style/main.css";
import {nanoid} from "nanoid";
import Form from "./Form";
import List from "./List";

const App = () => {
  const [filter, setFilter] = useState("ALL");
  const handleFilterChange = value => setFilter(value);
  const [items, setItems] = useState([]);
  const addItem = (text1, text2) => {
    setItems([...items, {content1: text1, content2: text2, done: false, id: nanoid()}])
  };
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const handleCheck = checked => {
    const newItems = items.map(item => {
      if(item.id === checked.id) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  }

  return (
    <>
      <Form addItem = {addItem}/>
      <List
        key = {items.id}
        handleFilterChange = {handleFilterChange}
        filter = {filter}
        items = {items}
        deleteItem = {deleteItem}
        handleCheck = {handleCheck}
      />
    </>
  );
};


export default App;