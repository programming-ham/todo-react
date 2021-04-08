import classnames from "classnames";

const Delete = ({handleClickDeleteAll, handleClickDeleteDone}) => {
  return (
    <>
      <div className = "deleteBtns">
        <button
          className = {classnames("allD", "deleteAll")} 
          type = "button"
          onClick =   {handleClickDeleteAll}
        >Delete all tasks</button>
        <button 
          className = {classnames("allD", "deleteDones" )}
          type = "button"
          onClick = {handleClickDeleteDone}
        >Delete all dones</button>
      </div>
    </>
  )
}

export default Delete;

