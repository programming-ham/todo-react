import {useState} from "react";
import classnames from "classnames"

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return(
    <div className="authBody">
      <div className = "authContents">
        <div className = "authLeft">
          <div className = "authTitles">
            <h1 className = "authMainTitle">ToDoList</h1>
            <h2 className = "authSubTitle"><span className = {classnames  ("authSubTitle", "by")}>by</span>React</h2>
          </div>
          <p className = "authGif"></p>
          <p>Please sign up to save your task information→</p>
        </div>

        <div className="authRight">
          <h2 className = "signUp">Sign Up</h2>
          <form className = "authForm" onSubmit = {handleSubmit}>
            <label className = "authLabelMail" htmlFor="mail">mail</label>
            <input 
              className = "authInputMail"
              id = "mail"
              type = "text"
              autoComplete = "off"
              value = {email}
              onChange = {e => setEmail(e.target.value)}
            />
            <label className = "authLabelPassword" htmlFor="password">passwoord</label>
            <input 
              className = "authInputPassword"
              id = "password"
              type = "password"
              value = {password}
              onChange = {e => setPassword(e.target.value)}
            />
            <div className="authInner">
              <p className = "atLeast">At least 6 characters</p>
              <p className = "pwLength">n/16</p>
            </div>
            
            <button 
              className = "authSubmit" 
              type = "submit"
            >Sign Up</button>
          </form>
          <span className = "if">If you have already signed up...</span><a className = "authTo" href = "#">Log In</a>
        </div>
      </div>
    </div>
   
  );
};

export default Signup;