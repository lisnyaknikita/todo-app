import { AiFillDelete } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'

import { ITodo } from "../types/types";

interface TodoItemProps {
    todo: ITodo,
    deleteTodo: (id: number) => void
    onTogle: (id: number, isCompelted:any) => void,
    onEdit: (id:any, title:any) => void
}

function TodoItem({ todo, deleteTodo, onTogle, onEdit }: TodoItemProps) {

    function delTodo(id: any) {
        deleteTodo(id)
    }

    function togleTask(id: any, isCompelted:any) {

        onTogle(id, isCompelted)
    }

    function editTodo(id:any, title:any) {
        onEdit(todo.id, todo.title)
    }

    return (
        <li
            className="todo__item flex items-center gap-2 bg-zinc-700 mb-4 rounded-xl hover:bg-zinc-500 transition-colors">
            <input id={`todo-${todo.id}`} type="checkbox" checked={todo.isCompleted} onChange={e=>e.target.value} className="ml-3 mt-0.5 bg-pink-300 hover:bg-pink-400 cursor-pointer w-5 h-5 border-3 border-rose-500 rounded checked:bg-rose-600" />
            <label
                htmlFor={`todo-${todo.id}`}
                className={`todo__item-title w-full cursor-pointer py-3 text-xl font-sans text-zinc-300 ${todo.isCompleted === true && 'line-through'}`}
                onClick={() => togleTask(todo.id, todo.isCompleted)}
            >{todo.title}</label>
            <button
                onClick={() => editTodo(todo.id, todo.title)}
                className='mr-2 rounded-xl px-2 py-2 bg-transparent hover:bg-blue-400 transition-colors'><MdModeEdit /></button>
            <button
                onClick={() => window.confirm("Do you really want to delete this task?") && delTodo(todo.id)}
                className='mr-5 rounded-xl px-2 py-2 bg-transparent hover:bg-red-400 transition-colors'><AiFillDelete /></button>
        </li >
    );
}

export default TodoItem;