import Item from "./Item";

const List = ({todos, deleteTodo}) => {
  return (
    <ul className = "list"> 
      {todos.map((todo) => {
        return (
          <Item
            key = {todo.id}
            id = {todo.id}
            content1 = {todo.content1}
            content2 = {todo.content2}
            deleteTodo = {deleteTodo}
          /> 
        );
      })}
    </ul>
  );
};

export default List;