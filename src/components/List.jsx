import {useState} from "react";
import Filter from "./Filter";
import Item from "./Item";

const List = ({tasks, handleDone, handleEdit, deleteTask, editContent1, editContent2}) => {
  // 
  const [filter, setFilter] = useState("ALL");
  const displayTasks = tasks.filter(task => {
    if(filter === "ALL") {
      return true;
    } else if (filter === "ACTIVE") {
      return !task.done;
    } else {
      return task.done;
    };
  }); 
  const handleFilterChange = value => setFilter(value);
  // 上記全てfilter関連

  return (
    <>
    <Filter
      handleFilterChange = {handleFilterChange}
      value = {filter}
      />
    <ul className = "list"> 
      {displayTasks.map(task => {
        return(
          <Item
            key = {task.key}
            task = {task} 
            handleDone = {handleDone}
            handleEdit = {handleEdit}
            deleteTask = {deleteTask}
            editContent1 = {editContent1}
            editContent2 = {editContent2}
          />
        );
      })}
    </ul>
    </>
  );
};

export default List;