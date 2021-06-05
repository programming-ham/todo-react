import {useState} from "react";
import {useContext} from "react";
import {useHistory, Link} from "react-router-dom";
import classnames from "classnames";
import {auth} from "../firebase/config";
import {AuthContext} from "../context/AuthContext";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  // const [autoLogin, setAutoLogin] = useState("");
  const history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(mail, password)
    .then(() => {
      console.log("ログイン成功");
      history.push("/");
    })
    .catch(() => {
      console.log("ログイン失敗");
    });
  }

  const value = useContext(AuthContext);
  return(
    <div className="authBody">
      <div className = "authContents">
        <div className = "authLeft">
          <div className = "authTitles">
            <h1 className = "authMainTitle">ToDoList</h1>
            <h2 className = "authSubTitle"><span className = {classnames  ("authSubTitle", "by")}>by</span>React</h2>
          </div>
          <p className = "authGif"></p>
          <p>Please log in to save your task information→</p>
        </div>

        <div className="authRight">
          <h2 className = "logIn">Log In</h2>
          <form className = "authForm" onSubmit = {handleSubmit}>
            <label className = "authLabelMail" htmlFor="mail">mail</label>
            <input 
              className = "authInputMail"
              id = "mail"
              type = "text"
              autoComplete = "off"
              value = {mail}
              onChange = {e => setMail(e.target.value)}
            />
            <label className = "authLabelPassword" htmlFor="password">passwoord</label>
            <input 
              className = "authInputPassword"
              id = "password"
              type = "password"
              autoComplete = "off"
              value = {password}
              onChange = {e => setPassword(e.target.value)}
            />
            <div className="authInner">
              <label className = "autoLogIn">
                <input type="checkbox"/>Enable auto login</label>
              <p className = "pwLength">n/16</p>
            </div>
            
            <button 
              className = "authSubmit" 
              type = "submit"
            >Log In</button>
          </form>
          <span className = "if">If you haven't signed up yet...</span><Link to = "/signup" className = "authTo">Sign Up</Link>
        </div>
      </div>
    </div>
   
  );
};

export default Login;