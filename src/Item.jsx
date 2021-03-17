import {useState} from "react";
import {FaCheckCircle, FaTrashAlt, FaPen} from "react-icons/fa";

const Item = ({content, id, deleteTodo}) => {
  const [done, setDone] = useState(false);
  return (
    <ul className = "itemInner">
      <li>
        <span className = "task" style = {{textDecoration: done ? "line-through": "none"}}>{content}</span>
      </li>
      <div className = "btns">
        <button className = " btn edit"><FaPen /></button>
        <button className = "btn done" onClick = {() => setDone(!done)}><FaCheckCircle /></button>
        <button className = "btn delete" onClick = {() => deleteTodo(id)}><FaTrashAlt /></button>
      </div>
      
    </ul>
  );
};
export default Item;