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
            className={`todo__item ${todo.isCompleted === true && 'bg-blue-300 dark:bg-slate-700'} flex items-center justify-between bg-white mb-4 rounded-xl hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 transition-colors`}>
            <input id={`todo-${todo.id}`} type="checkbox" checked={todo.isCompleted} onChange={e=>e.target.value} className="ml-3 mt-0.5 bg-blue-300 hover:bg-blue-400 cursor-pointer w-5 h-5 border-3 border-blue-600 checked:bg-blue-700" 
            onClick={() => togleTask(todo.id, todo.isCompleted)}
            />
            <label
                htmlFor={`todo-${todo.id}`}
                className={`todo__item-title pl-2 w-[170px] sm:max-w-[78%] sm:w-full whitespace-normal md:max-w-[90%] cursor-pointer py-2 sm:py-3 text-l sm:text-xl font-sans text-slate-900 dark:text-slate-300 ${todo.isCompleted === true && 'line-through'}`}
            ><p className='overflow-x-hidden'>{todo.title}</p></label>
            <div className="todo__item-btns ml-auto flex">
                <button
                onClick={() => editTodo(todo.id, todo.title)}
                className='mr-1 rounded-xl px-1 py-1 bg-transparent hover:bg-blue-400 transition-colors sm:mr-2 sm:rounded-xl sm:px-2 sm:py-2'><MdModeEdit /></button>
            <button
                onClick={() => window.confirm("Do you really want to delete this task?") && delTodo(todo.id)}
                className='mr-2 rounded-xl px-1 py-1 bg-transparent hover:bg-red-400 transition-colors sm:mr-5 sm:px-2 sm:py-2'><AiFillDelete /></button>
            </div>
            
        </li >
    );
}

export default TodoItem;