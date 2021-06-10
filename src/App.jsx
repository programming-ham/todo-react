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
  const [tasks, setTasks] = useState([]);
  const logout = () => {
    auth.signOut()
      .then(() => {console.log("ログアウト成功")})
      .catch((err) => {console.log("ログアウト失敗")})
  }
  const addTask = (text1, text2) => {
    setTasks([...tasks, {key: nanoid(), content1: text1, content2: text2, edit: false, done: false}])
  };
  const deleteTask = key => {
    setTasks(tasks.filter(task => task.key !== key));
  };
  const handleDone = selected => {
    const newTasks = tasks.map(task => {
      if(task.key === selected.key) {
        task.done = !task.done
      };
      return task;
    });
    setTasks(newTasks);
  };
  const handleEdit = selected => {
    const newTasks = tasks.map(task => {
      if(task.key === selected.key) {
        task.edit = !task.edit
      }
      return task;
    });
    setTasks(newTasks);
  };
  const editContent1 = (text, key) => {
    setTasks(tasks.map(task => {
      if(task.key === key) {
        return {...task, content1: text}
      } else {
        return task;
      }
    }));
  };
  const editContent2 = (text, key) => {
    setTasks(tasks.map(task => {
      if(task.key === key) {
        return {...task, content2: text}
      } else if(text === "") {
        return task;
      } else {
        return task;
      }
    }));
  };
  const handleClickDeleteAll = () => {
    setTasks(tasks.filter(({tasks}) => tasks))
  };
  const handleClickDeleteDone = () => {
    setTasks(tasks.filter(({done}) => !done))
  };

  useEffect(() => {
    db.collection("tasks")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id,
        }));
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
                addItem = {addTask}
                />
                <button className = "logOutBtn" onClick = {logout}>Log Out</button>
              </div>
              
              {tasks.map(task => {
                return (
                  <List
                    tasks = {tasks}
                    deleteTask = {deleteTask}
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