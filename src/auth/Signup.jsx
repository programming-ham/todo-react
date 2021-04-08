const Signup = () => {
  return(
    <form>
      <h1 className = "suTitle">Sign Up</h1>
      <input className = "suMail" type = "text" placeholder = "メールアドレス" />
      <input className = "suPassword" type="password" placeholder = "パスワード"/>
      <button className = "suRegister" type = "button">新規登録</button>
    </form>
  );
};

export default Signup;