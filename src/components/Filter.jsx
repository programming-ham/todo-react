import classnames from "classnames";

const Filter = ({handleFilterChange, value}) => {
  const handleClick = (key) => {
    handleFilterChange(key);
  };

  return (
    <div className = "filters">
      <button 
        className = {classnames({"filter": true, "isActive": value === "ALL"})}
        type = "button"
        onClick = {() => handleClick("ALL")}
      >ALL</button>
      <button 
        type = "button"
        onClick = {() => handleClick("ACTIVE")}
        className = {classnames({"filter": true, "isActive": value === "ACTIVE"})}
      >ACTIVE</button>
      <button 
        type = "button"
        onClick = {() => handleClick("DONE")}
        className = {classnames({"filter": true, "isActive": value === "DONE"})}
      >DONE</button>
    </div>
  )
}

export default Filter;