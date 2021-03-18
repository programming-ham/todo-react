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
    <form className = "form1" autoComplete = "off" onSubmit = {handleSubmit}>
      <input
        className = "formTask"
        id = "task"
        placeholder = "Name"
        value = {text1}
        autoFocus = {true}
        onChange = {(e) => setText1(e.target.value)}
      />
      <textarea
        className = "formNote"
        id = "note"
        placeholder = "Note"
        value = {text2}
        onChange = {(e) => setText2(e.target.value)}

      />
      <button className = "addBtn" disabled = {text1.trim() === ""}>Add new task</button>

    </form>
  );
};

export default Form;