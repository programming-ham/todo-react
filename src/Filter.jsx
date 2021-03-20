import classNames from "classnames";

const Filter = ({handleFilterChange, value}) => {
  const handleClick = (id, e) => {
    // e.preventDefault();
    handleFilterChange(id);
  };

  return (
    <div className = "filters">
      <button 
        type = "button"
        onClick = {() => handleClick("ALL")}
        className = {classNames({"is-active": value === "ALL"})}
      >ALL</button>
      <button 
        type = "button"
        onClick = {() => handleClick("ACTIVE")}
        className = {classNames({"is-active": value === "ACTIVE"})}
      >ACTIVE</button>
      <button 
        type = "button"
        onClick = {() => handleClick("DONE")}
        className = {classNames({"is-active": value === "DONE"})}
      >DONE</button>
    </div>
  )
}

export default Filter;