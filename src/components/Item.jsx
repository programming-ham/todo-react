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
    <ul className = {classnames({"itemContents": true, "itemOrange": item.done})}>
      <div className = "itemInner">
        { item.edit ? <input 
          className = "itemEditingTask" 
          id = "itemEditingTask" 
          onChange = {e => {editContent1(e.target.value, item.key)}} 
          value = {item.content1} 
        ></input> : <li 
          className = {classnames({"itemTask": true, "itemDone": item.done})}
          key = {item.key}
        >{item.content1}</li> }
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
            onClick = {() => deleteItem(item.key)}
          ><FaTrashAlt /></button>
        </div>
      </div>
      { item.edit ? <input
        className = "itemEditingNote"
        onChange = {e => {editContent2(e.target.value, item.key)}}
        value = {item.content2}
      ></input> : <p
        className = {classnames({"itemNote": true, "itemDone": item.done})}
      >{item.content2}</p>}
    </ul>
  );
};
export default Item;

// document.getElementById("editTask").focus()