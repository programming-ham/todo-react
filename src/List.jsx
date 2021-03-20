import Filter from "./Filter";
import Item from "./Item";

const List = ({handleFilterChange, filter, items, deleteItem, handleCheck}) => {
  const displayItems = items.filter(item => {
    if(filter === "ALL") return true;
    if(filter === "ACTIVE") return !item.done;
    if(filter === "DONE") return item.done;
  });

  return (
    <>
      <Filter
        handleFilterChange = {handleFilterChange}
        value = {filter}
      />
      <ul className = "list"> 
        {displayItems.map(item => {
          return (
            <Item
              key = {item.id}
              item = {item} 
              deleteItem = {deleteItem}
              handleCheck = {handleCheck}
            />
         );
       })}
      </ul>
    </>
  );
};

export default List;