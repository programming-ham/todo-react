import {useState} from "react";
import Filter from "./Filter";
import Item from "./Item";

const List = ({items, handleCheck, deleteItem}) => {
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
            handleCheck = {handleCheck}
            deleteItem = {deleteItem}
          />
        );
      })}
    </ul>
    </>
  );
};

export default List;