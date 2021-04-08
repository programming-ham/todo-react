import "./style/main.css";
import {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {nanoid} from "nanoid";
import Auth from "./components/Auth";
import Form from "./components/Form";
import List from "./components/List";
import Delete from "./components/Delete";


const App = () => {
  const [items, setItems] = useState([]);
  const addItem = (text1, text2) => {
    setItems([...items, {key: nanoid(), content1: text1, content2: text2, edit: false, done: false}])
  };
  const deleteItem = key => {
    setItems(items.filter(item => item.key !== key));
  };
  const handleDone = selected => {
    const newItems = items.map(item => {
      if(item.key === selected.key) {
        item.done = !item.done
      };
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

  const editContent1 = (text, key) => {
    setItems(items.map(item => {
      if(item.key === key) {
        return {...item, content1: text}
      } else {
        return item;
      }
    }));
  };

  const editContent2 = (text, key) => {
    setItems(items.map(item => {
      if(item.key === key) {
        return {...item, content2: text}
      } else if(text === "") {
        return item;
      } else {
        return item;
      }
    }));
  };


  const handleClickDeleteAll = () => {
    setItems(items.filter(({items}) => items))
  };
  const handleClickDeleteDone = () => {
    setItems(items.filter(({done}) => !done))
  };

  return (
    <>
      <Router>
        <Switch>

          <Route exact path = "/auth">
            <Auth />
          </Route>

          <Route exact path = "/">
            <Form 
              addItem = {addItem}
            />
            <List
              items = {items}
              deleteItem = {deleteItem}
              handleDone = {handleDone}
              handleEdit = {handleEdit}
             editContent1 = {editContent1}
              editContent2 = {editContent2}
            />
            <Delete 
              handleClickDeleteAll = {handleClickDeleteAll}
              handleClickDeleteDone = {handleClickDeleteDone}
            />
          </Route>
          
        </Switch>
      </Router>

      
    </>
  );
};

export default App;