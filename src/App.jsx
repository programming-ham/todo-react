import "./style/main.css";
import {useState} from "react";
import {nanoid} from "nanoid";
import Form from "./Form";
import List from "./List";

const App = () => {
  const [items, setItems] = useState([]);
  const addItem = (text1, text2) => {
    setItems([...items, {key: nanoid(), content1: text1, content2: text2, done: false}])
  };
  const deleteItem = (key) => {
    setItems(items.filter((item) => item.key !== key));
  };

  const handleCheck = selected => {
    const newItems = items.map(item => {
      if(item.key === selected.key) {
        item.done = !item.done
      }
      return item;
    });
    setItems(newItems);
  }

  return (
    <>
      <Form 
        addItem = {addItem}
        />
      <List
        items = {items}
        handleCheck ={handleCheck}
        deleteItem = {deleteItem}
      />
    </>
  );
};


export default App;