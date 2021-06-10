import classnames from "classnames";
import {FaCheckCircle, FaTrashAlt, FaPen} from "react-icons/fa";

const Item = ({task, handleDone, handleEdit, deleteTask, editContent1, editContent2}) => {
  const handleChangeDone = () => {
    handleDone(task);
  };
  const handleChangeEdit = () => {
    handleEdit(task);
  };
  
  return (
    <ul className = {classnames({"itemContents": true, "itemOrange": task.done})}>
      <div className = "itemInner">
        { task.edit ? <input 
          className = "itemEditingTask" 
          id = "itemEditingTask" 
          onChange = {e => {editContent1(e.target.value, task.key)}} 
          value = {task.content1} 
        ></input> : <li 
          className = {classnames({"itemTask": true, "itemDone": task.done})}
          key = {task.key}
        >{task.content1}</li> }
        <div className = "itemBtns">
          <button 
            className = {classnames("itemBtn", "itemEditBtn")}
            onClick = {handleChangeEdit}
          ><FaPen /></button>
          <button type = "button" 
            className = {classnames("itemBtn", "itemDoneBtn")}
            onClick = {handleChangeDone}
          ><FaCheckCircle /></button>
          <button
            className = {classnames("itemBtn", "itemDeleteBtn")}
            onClick = {() => deleteTask(task.key)}
          ><FaTrashAlt /></button>
        </div>
      </div>
      { task.edit ? <input
        className = "itemEditingNote"
        onChange = {e => {editContent2(e.target.value, task.key)}}
        value = {task.content2}
      ></input> : <p
        className = {classnames({"itemNote": true, "itemDone": task.done})}
      >{task.content2}</p>}
    </ul>
  );
};
export default Item;

// document.getElementById("editTask").focus()