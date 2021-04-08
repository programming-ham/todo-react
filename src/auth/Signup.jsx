const Signup = () => {
  return(
    <form>
      <h1>Sign Up</h1>
      <input type = "text" placeholder = "メールアドレス" />
      <input type="password" placeholder = "パスワード"/>
      <button type = "button">新規登録</button>
    </form>
  );
};

export default Signup;