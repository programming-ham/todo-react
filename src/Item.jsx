import {useState} from "react";
import {FaCheckCircle, FaTrashAlt, FaPen} from "react-icons/fa";

const Item = ({content1, content2, id, deleteTodo}) => {
  const [done, setDone] = useState(false);
  return (
    <ul className = "itemAll">
      <div className = "itemInner">
        <li>
          <span className = "task" style = {{textDecoration: done ? "line-through": "none"}}>{content1}</span>
        </li>
        <div className = "btns">
          <button className = " btn edit"><FaPen /></button>
          <button className = "btn done" onClick = {() => setDone(!done)}><FaCheckCircle /></button>
          <button className = "btn delete" onClick = {() => deleteTodo(id)}><FaTrashAlt /></button>
        </div>
      </div>
      <p className = "memo">{content2}</p>
    </ul>
  );
};
export default Item;