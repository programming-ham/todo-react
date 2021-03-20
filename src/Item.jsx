import classnames from "classnames";
import {FaCheckCircle, FaTrashAlt, FaPen} from "react-icons/fa";

const Item = ({item, deleteItem, handleCheck}) => {
  const handleChange = () => {
    handleCheck(item);
  };
  
  return (
    <ul className = "itemContents">
      <div className = "itemInner">
        <li>
          <span className = {classnames({task: true, through: item.done})}>{item.content1}</span>
        </li>
        <div className = "btns">
          <button className = {classnames("btn", "edit")}><FaPen /></button>
          <button 
            className = {classnames("btn", "done")}
            onClick = {() => !item.done}
            onChange = {handleChange}
          ><FaCheckCircle /></button>
          <button
           className = {classnames("btn", "delete")}
           onClick = {() => deleteItem(item.id)}
          ><FaTrashAlt /></button>
        </div>
      </div>
      <p className = "note">{item.content2}</p>
    </ul>
  );
};
export default Item;

// className = {classnames({btn: true, done: true, through: item.done})}