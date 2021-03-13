import {useState} from "react";

const Item = ({content, id, deleteTodo}) => {
  const [done, setDone] = useState(false);
  return (
    <ul>
      <li>
        <span style = {{textDecoration: done ? "line-through": "none"}}>{content}</span>
        <button>編集</button>
        <button onClick = {() => setDone(!done)}>達成</button>
        <button onClick = {() => deleteTodo(id)}>削除</button>
        
      
      </li>
    </ul>
  );
};
export default Item;