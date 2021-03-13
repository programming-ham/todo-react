import Item from "./Item";

const List = ({todos, deleteTodo}) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Item
            key = {todo.id}
            id = {todo.id}
            content = {todo.content}
            deleteTodo = {deleteTodo}
          /> 
        );
      })}
    </ul>
  );
};

export default List;