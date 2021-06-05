const Delete = ({handleClickDeleteAll, handleClickDeleteDone}) => {
  return (
    <>
      <div className = "deltBtns">
        <button
          className = "deltAll" 
          type = "button"
          onClick =   {handleClickDeleteAll}
        >Delete all tasks</button>
        <button 
          className = "deltAll"
          type = "button"
          onClick = {handleClickDeleteDone}
        >Delete all dones</button>
      </div>
    </>
  )
}

export default Delete;

