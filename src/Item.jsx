import classnames from "classnames";
import {FaCheckCircle, FaTrashAlt, FaPen} from "react-icons/fa";

const Item = ({item, handleCheck, deleteItem}) => {
  const handleChange = () => {
    handleCheck(item);
  };
  
  return (
    <div className = "itemContents">
      <div className = "itemInner">
          <span className = {classnames({task: true, through: item.done})}>{item.content1}</span>
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
    </div>
  );
};
export default Item;