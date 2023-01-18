import { ITodo } from "../types/types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: ITodo[],
  deleteTodo: (id: number) => void,
  onTogle: (id: number, isCompelted:any) => void,
  onEdit: (id:any, title:any) => void
}

function TodoList({ todos, deleteTodo, onTogle, onEdit }: TodoListProps) {
  return (
    <>
      {todos.length > 0 ? 
      <ul className="todo__list max-w-[1400px] max-h-[400px] overflow-y-auto w-full mx-auto pr-4 rounded-xl bg-transparent mb-8 sm:mb-8">
        {todos.map(todo => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} onTogle={onTogle} onEdit={onEdit} />)}
      </ul>
        : <h1 className="text-zinc-500 font-bold text-center text-3xl mb-20 mt-20">No tasks</h1>}

    </>

  );
}

export default TodoList;