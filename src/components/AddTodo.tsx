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
        <div className='todo__add max-w-[700px] mx-auto bg-zinc-600 p-5 flex items-center rounded-xl'>
            <input
                type="text"
                className='p-3 text-zinc-300 w-full bg-transparent border-0 rounded-xl bg-zinc-800 outline-none'
                placeholder='Enter the task name...'
                value={taskName}
                onChange={taskNameHandler}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addTask()}
            />
            <button
                onClick={addTask}
                className='p-3 bg-transparent bg-zinc-500 hover:bg-green-400 transition-colors rounded-xl ml-2'>
                {isAdding ? 'Adding...' : <VscAdd/>}
            </button>
        </div>
    )
}
