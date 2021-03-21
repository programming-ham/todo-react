import classnames from "classnames";

const Filter = ({handleFilterChange, value}) => {
  const handleClick = (key) => {
    handleFilterChange(key);
  };
// ここのpreventDefaultはaタグのページ遷移を妨害しているのでは？→ボタンなら必要なし

  return (
    <div className = "filters">
      <button 
        type = "button"
        onClick = {() => handleClick("ALL")}
        className = {classnames({"filter": true, "all": true, "isActive": value === "ALL"})}
      >ALL</button>
      <button 
        type = "button"
        onClick = {() => handleClick("ACTIVE")}
        className = {classnames({"filter": true, "active": true, "isActive": value === "ACTIVE"})}
      >ACTIVE</button>
      <button 
        type = "button"
        onClick = {() => handleClick("DONE")}
        className = {classnames({"filter": true, "done": true, "isActive": value === "DONE"})}
      >DONE</button>
    </div>
  )
}

export default Filter;