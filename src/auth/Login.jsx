import {useState} from "react";
import classnames from "classnames";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [autoLogin, setAutoLogin] = useState("");
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
          <form className = "authForm">
            <label className = "authLabelMail" htmlFor="mail">mail</label>
            <input 
              className = "authInputMail"
              id = "mail"
              type = "text"
              autoComplete = "off"
            />
            <label className = "authLabelPassword" htmlFor="password">passwoord</label>
            <input 
              className = "authInputPassword"
              id = "password"
              type = "password"
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
          <span className = "if">If you haven't signed up yet...</span><a className = "authTo" href = "#">Sign Up</a>
        </div>
      </div>
    </div>
   
  );
};

export default Auth;