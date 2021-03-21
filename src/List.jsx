import {useState} from "react";
import Filter from "./Filter";
import Item from "./Item";

const List = ({items, handleCheck, deleteItem}) => {
  const [filter, setFilter] = useState("ALL");
  // eslint-disable-next-line
  const displayItems = items.filter(item => {
    if(filter === "ALL") return true;
    if(filter === "ACTIVE") return !item.done;
    if(filter === "DONE") return item.done;
  });
  const handleFilterChange = value => setFilter(value);

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