import {useState} from "react";
import Filter from "./Filter";
import Item from "./Item";

const List = ({items, handleDone, handleEdit, deleteItem, editContent1, editContent2}) => {
  // 
  const [filter, setFilter] = useState("ALL");
  const displayItems = items.filter(item => {
    if(filter === "ALL") {
      return true;
    } else if (filter === "ACTIVE") {
      return !item.done;
    } else {
      return item.done;
    }
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
      {displayItems.map(item => {
        return(
          <Item
            key = {item.key}
            item = {item} 
            handleDone = {handleDone}
            handleEdit = {handleEdit}
            deleteItem = {deleteItem}
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