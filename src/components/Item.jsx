import classnames from "classnames";
import {FaCheckCircle, FaTrashAlt, FaPen} from "react-icons/fa";

const Item = ({item, handleDone, handleEdit, deleteItem, editContent1, editContent2}) => {
  const handleChangeDone = () => {
    handleDone(item);
  };
  const handleChangeEdit = () => {
    handleEdit(item);
  };

  
  return (
    <ul className = {classnames({"itemContents": true, "orange": item.done})}>
      <div className = "itemInner">
         { item.edit ? <input className = "editTask" id = "editTask" onChange = {e => {editContent1(e.target.value, item.key)}} value = {item.content1} ></input> : <li 
            className = {classnames({"task": true, "through": item.done})}
            key = {item.key}
          >{item.content1}</li> }
          <div className = "btns">
            <button 
              className = {classnames("btn", "editBtn")}
              onClick = {handleChangeEdit}
            ><FaPen /></button>
            <button type = "button" 
              className = {classnames("btn", "doneBtn")}
              onClick = {handleChangeDone}
            ><FaCheckCircle /></button>
            <button
              className = {classnames("btn", "deleteBtn")}
              onClick = {() => deleteItem(item.key)}
            ><FaTrashAlt /></button>
        </div>
      </div>
      { item.edit ? <input className = "editNote" onChange = {e => {editContent2(e.target.value, item.key)}} value = {item.content2} ></input> : <p className = {classnames({"note": true, "through": item.done})}>{item.content2}</p>}
    </ul>
  );
};
export default Item;

// document.getElementById("editTask").focus()