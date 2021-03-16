import {useState} from "react";
import {FaCheckCircle, FaTrashAlt, FaPen} from "react-icons/fa";

const Item = ({content, id, deleteTodo}) => {
  const [done, setDone] = useState(false);
  return (
    <ul>
      <li>
        <span style = {{textDecoration: done ? "line-through": "none"}}>{content}</span>
        <button><FaPen /></button>
        <button><FaCheckCircle /></button>
        <button><FaTrashAlt /></button>
        
      
      </li>
    </ul>
  );
};
export default Item;