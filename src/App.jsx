import "./style/main.css";
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {auth} from "./firebase/config";
import {nanoid} from "nanoid";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Form from "./components/Form";
import List from "./components/List";
import Delete from "./components/Delete";
import {AuthProvider} from "./context/AuthContext";
import LoggedInRoute from "./context/LoggedInRoute";
import {db} from "../src/firebase/config";
 

const App = () => {
  const logout = () => {
    auth.signOut()
      .then(() => {console.log("ログアウト成功")})
      .catch((err) => {console.log("ログアウト失敗")})
  }
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
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    db.collection("tasks")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id,
        }));
        console.log(data);
        setTasks(data);
      })
      .catch(err => {
        console.log("データ取得失敗, err")
      })
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Switch>

          <Route exact path = "/login">
            <Login />
          </Route>

          <Route exact path = "/signup">
            <Signup />
          </Route>

          <Route exact path = "/">
            <LoggedInRoute>
              <div className = "topInner">
                <Form 
                addItem = {addItem}
                />
                <button className = "logOutBtn" onClick = {logout}>Log Out</button>
              </div>
              {tasks.map(task => {
                return (
                  <List
                    items = {items}
                    deleteItem = {deleteItem}
                    handleDone = {handleDone}
                    handleEdit = {handleEdit}
                    editContent1 = {editContent1}
                    editContent2 = {editContent2}
                  />
                )
              })}
              
              <Delete 
                handleClickDeleteAll = {handleClickDeleteAll}
                handleClickDeleteDone = {handleClickDeleteDone}
              />
            </LoggedInRoute>
          </Route>
            
            
          
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;


// 13 1:53:00から 定義の置き換え