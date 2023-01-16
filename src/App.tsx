import axios from 'axios';

import React, {useEffect, useState} from 'react';

import AddTodo from './components/AddTodo';
import Greeting from './components/Greeting';
import TodoList from './components/TodoList';
import {ITodo} from './types/types';


function App() {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isAdding, setIsAdding] = useState<boolean>(false)


    async function getTodos() {
        setIsLoading(true)
        const response = await axios.get<ITodo[]>('http://localhost:3001/todos');
        setTodos(response.data)
        setIsLoading(false)
    }

    async function addTodo(newTask: ITodo) {
        setIsAdding(true)
        await axios.post('http://localhost:3001/todos', newTask)
        const newTodos = [...todos, newTask]
        setTodos(newTodos)
        setIsAdding(false)
    }

    async function deleteTodo(id: number) {
        await axios.delete('http://localhost:3001/todos/' + id)
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    async function onToggle(id: number, isCompelted:boolean) {
        const newTodos = todos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                isCompleted: !todo.isCompleted
            }
        })
        setTodos(newTodos)
        await axios.patch('http://localhost:3001/todos/' + id, {
            isCompleted: !isCompelted
        })
    }

    async function onEdit(id: any, title: any) {
        const newTaskName = prompt("Enter the new task name...", title)
        console.log(newTaskName)
        await axios.patch('http://localhost:3001/todos/' + id, {
            title: newTaskName
        })
        const newTaskList = todos.map(todo=> {
            if (todo.id === id && newTaskName) {
                todo.title = newTaskName;
            }
            return todo
        })
        setTodos(newTaskList)
    }


    useEffect(() => {
        getTodos()
    }, [])


    return (
        <div className="todo bg-blue-100 h-screen">
            <div className="todo__inner max-w-[1900px] mx-auto py-10">
                <Greeting todos={todos} />
                {isLoading ?
                    <h2 className='text-zinc-500 font-bold text-center text-3xl mb-20 mt-20'>Loading tasks...</h2> :
                    <TodoList todos={todos} deleteTodo={deleteTodo} onTogle={onToggle} onEdit={onEdit}/>}

                <AddTodo addNewTodo={addTodo} todos={todos} isAdding={isAdding}/>
            </div>

        </div>
    );
}

export default App;
