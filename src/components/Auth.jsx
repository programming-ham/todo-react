import classnames from "classnames";

const Auth = () => {
  return(
    <>
      <div className = "authTitles">
        <h1 className = "authMainTitle">ToDoList</h1>
        <h2 className = "authSubTitle"><span className = {classnames("authSubTitle", "by")}>by</span>React</h2>
      </div>

      <div className = "authLogIn">
        <h3 className = "authOr">Log In</h3>
        <form className = "authForm">
          <input 
            className = "authInput"
            type = "text"
            placeholder = "mail"
          />
          <input 
            className = "authInput"
            type = "password"
            placeholder = "password"
          />
          <button 
            className = "authSubmit" 
            type = "submit"
          >Log In</button>
          <p>
            <input 
              className = "authAutoLogIn"
              type="checkbox"
              value = "auto"
            />Enable auto login
          </p>
          
        </form>
      </div>

      <p className = "if">If you haven't signed up yet...</p>

      <div className = "authSignUp">
        <h3 className = "authOr">Sign Up</h3>
        <form className = "authForm">
          <input
            className = "authInput" 
            type = "text"
            placeholder = "mail" 
          />
          <input 
            className = "authInput" 
            type="password" 
            placeholder = "password"
          />
          <button 
            className = "authSubmit" 
            type = "submit"
          >Register</button>
        </form>
      </div>
    </>
  );
};

export default Auth;