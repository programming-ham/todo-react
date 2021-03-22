import classnames from "classnames";
import {FaCheckCircle, FaTrashAlt, FaPen} from "react-icons/fa";

const Item = ({item, handleCheck, deleteItem}) => {
  const handleChange = () => {
    handleCheck(item);
  };
  
  return (
    <ul className = {classnames({"itemContents": true, "orange": item.done})}>
      <div className = "itemInner">
          <li 
            className = {classnames({task: true, through: item.done})}
            key = {item.key}
          >{item.content1}</li>
          <div className = "btns">
            <button 
              className = {classnames("btn", "editBtn")}
            ><FaPen /></button>
            <button 
              className = {classnames("btn", "doneBtn")}
              onClick = {() => item.done}
              onChange = {handleChange}
            ><FaCheckCircle /></button>
            <button
              className = {classnames("btn", "deleteBtn")}
              onClick = {() => deleteItem(item.key)}
            ><FaTrashAlt /></button>
        </div>
      </div>
      <p className = "note">{item.content2}</p>
    </ul>
  );
};
export default Item;