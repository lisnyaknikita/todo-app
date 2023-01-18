import {VscAdd} from 'react-icons/vsc'

import React, {useState} from 'react'

import {ITodo} from '../types/types'

interface addTodoProps {
    addNewTodo: (newTask: ITodo) => void,
    todos: ITodo[],
    isAdding: boolean
}

export default function AddTodo({addNewTodo, todos, isAdding}: addTodoProps) {
    const [taskName, setTaskName] = useState('')

    // function taskNameHandler( e: React.ChangeEventHandler<HTMLInputElement>) {
    //     setTaskName(e.target.value)
    // }
    const taskNameHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTaskName(e.target.value)
    }

    function addTask() {
        const newTask = {"id": todos.length + 1, "title": taskName, "isCompleted": false}
        addNewTodo(newTask)
        setTaskName('')
    }

    return (
        <div className='todo__add max-w-[700px] mx-auto bg-white dark:bg-slate-600 p-3 sm:p-5 flex items-center rounded-xl'>
            <input 
                type="text"
                className='p-2 sm:p-3 text-slate-900 dark:text-slate-300 w-full bg-transparent rounded-xl border-2 border-slate-900 outline-none'
                placeholder='Enter the task name...'
                value={taskName}
                onChange={taskNameHandler}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addTask()}
            />
            <button
                onClick={addTask}
                className='p-3 sm:p-4 bg-transparent border-2 border-slate-900 hover:bg-green-400 dark:hover:bg-green-600 transition-colors rounded-xl ml-2'>
                {isAdding ? 'Adding...' : <VscAdd/>}
            </button>
        </div>
    )
}
