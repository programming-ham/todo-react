import "./style/main.css";
import {useState} from "react";
import {nanoid} from "nanoid";
import Form from "./Form";
import List from "./List";
import Delete from "./Delete";


const App = () => {
  const [items, setItems] = useState([]);
  const addItem = (text1, text2) => {
    setItems([...items, {key: nanoid(), content1: text1, content2: text2, edit: false, done: false}])
  };
  const deleteItem = key => {
    setItems(items.filter((item) => item.key !== key));
  };
  const handleDone = selected => {
    const newItems = items.map(item => {
      if(item.key === selected.key) {
        item.done = !item.done
      }
      return item;
    });
    setItems(newItems);
  };
  const handleEdit = selected => {
    const newItems = items.map(item => {
      if(item.key === selected.key) {
        item.edit = !item.edit
      }
      return item;
    });
    setItems(newItems);
  };


  const handleClickDeleteAll = () => {
    setItems(items.filter(({items}) => items))
  }
  const handleClickDeleteDone = () => {
    setItems(items.filter(({done}) => !done))
  }

  return (
    <>
      <Form 
        addItem = {addItem}
      />
      <List
        items = {items}
        deleteItem = {deleteItem}
        handleDone = {handleDone}
        handleEdit = {handleEdit}
      />
      <Delete 
        handleClickDeleteAll = {handleClickDeleteAll}
        handleClickDeleteDone = {handleClickDeleteDone}
      />
    </>
  );
};

export default App;