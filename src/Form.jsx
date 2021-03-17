import {useState} from "react";

const Form = ({addTodo}) => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text1, text2);
    setText1("");
    setText2("");
  };

  return (
    <form className = "form1" onSubmit = {handleSubmit}>
      <input
        className = "task"
        id = "task"
        placeholder = "タスク名"
        value = {text1}
        onChange = {(e) => setText1(e.target.value)}
      />
      <textarea
        className = "memo"
        id = "memo"
        placeholder = "メモ"
        value = {text2}
        onChange = {(e) => setText2(e.target.value)}

      />
      <button disabled = {text1.trim() === ""}>追加</button>

    </form>
  );
};

export default Form;