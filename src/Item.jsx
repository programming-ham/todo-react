import {useState} from "react";
import {FaCheckCircle, FaTrashAlt, FaPen} from "react-icons/fa";

const Item = ({content1, content2, id, deleteTodo}) => {
  const [done, setDone] = useState(false);
  return (
    <ul className = "itemInner">
      <li>
        <span className = "task" style = {{textDecoration: done ? "line-through": "none"}}>{content1}</span>
      </li>
      <div className = "btns">
        <button className = " btn edit"><FaPen /></button>
        <button className = "btn done" onClick = {() => setDone(!done)}><FaCheckCircle /></button>
        <button className = "btn delete" onClick = {() => deleteTodo(id)}><FaTrashAlt /></button>
      </div>
      {console.log(content2)}
    </ul>
  );
};
export default Item;