import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    width: "350px",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
});

const Form = ({addTodo}) => {
  const [text, setText] = useState("");
  const styles = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form className = {styles.form} onSubmit = {handleSubmit}>
      <input
        className = {styles.name}
        id = "title"
        placeholder = "タスク名"
        value = {text}
        onChange = {(e) => setText(e.target.value)}
      />
      <textarea
        className = {styles.memo}
        id = "memo"
        placeholder = "メモ"
      />
      <button disabled = {text.trim() === ""}>追加</button>

    </form>
  );
};

export default Form;