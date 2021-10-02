import TodoCard from "./TodoCard"

const TodoList = ({ todos, setTodos }) => {
  const sortedTodos = [...todos].sort( (a, b) => a.updatedAt > b.updatedAt ? 1 : -1);
  const activeTodos = sortedTodos.filter( (todo) => !todo.isDone && !todo.isDeleted);
  const doneTodos = sortedTodos.filter( (todo) => todo.isDone && !todo.isDeleted);

  const makeList = (todoList) => {
    if (todoList.length > 0) {
      return (
        todoList.map( (todo) => 
          <TodoCard todo={todo} todos={todos} setTodos={setTodos} /> 
        )
      )
    }
  }

  return (
    <div>
      {doneTodos.length > 0 && <h3>Done</h3>}
        {makeList(doneTodos)}
      {activeTodos.length > 0 && <h3>Todo</h3>}
        {makeList(activeTodos)}
    </div>
  );
}

export default TodoList;