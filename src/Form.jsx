import {useState} from "react";

const Form = ({addTodo}) => {
  const [text, setText] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form className = "form1" onSubmit = {handleSubmit}>
      <input
        className = "task"
        id = "task"
        placeholder = "タスク名"
        value = {text}
        onChange = {(e) => setText(e.target.value)}
      />
      <textarea
        className = "memo"
        id = "memo"
        placeholder = "メモ"
      />
      <button disabled = {text.trim() === ""}>追加</button>

    </form>
  );
};

export default Form;