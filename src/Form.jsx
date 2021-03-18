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
        onKeyPress = {(e) => {
          if(e.key === "Enter") {
            e.preventDefault()
            document.getElementById("note").focus()
          }
        }}
        onChange = {(e) => setText1(e.target.value)}
      />
      <textarea
        className = "formNote"
        id = "note"
        placeholder = "Note"
        value = {text2}
        onKeyPress = {(e) => {
          if(e.key === "Enter") {
            e.preventDefault()
            document.getElementById("addBtn").focus()
          }
        }}
        onChange = {(e) => setText2(e.target.value)}
      />
      <button
        className = "addBtn"
        id = "addBtn"
        disabled = {text1.trim() === ""}
        onClick = {() => {
          document.getElementById("task").focus()
        }}
      >Add new task</button>

    </form>
  );
};

export default Form;