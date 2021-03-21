import {useState} from "react";

const Form = ({addItem}) => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(text1, text2);
    setText1("");
    setText2("");
  };

  return (
    <form autoComplete = "off" onSubmit = {handleSubmit}>
      <input
        id = "task"
        placeholder = "Name"
        value = {text1}
        autoFocus = {true}
        onChange = {(e) => setText1(e.target.value)}
        onKeyPress = {(e) => {
          if(e.key === "Enter") {
            e.preventDefault()
            document.getElementById("note").focus()
          }
        }}
      />
      <textarea
        id = "note"
        placeholder = "Note"
        value = {text2}
        onChange = {(e) => setText2(e.target.value)}
        onKeyPress = {(e) => {
          if(e.key === "Enter") {
            e.preventDefault()
            document.getElementById("addBtn").focus()
          }
        }}
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