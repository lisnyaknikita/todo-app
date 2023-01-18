import { ITodo } from "../types/types";
import { useState } from "react";
import { MdModeEdit } from 'react-icons/md'

interface GreetingProps {
  todos: ITodo[],
  userName: string,
  setUserName: (userName: string) => void
}
function Greeting({ todos, userName, setUserName }: GreetingProps) {

  function editName() {
    const newName = prompt('Enter your name:', userName)
    newName && localStorage.setItem('userName', newName)
    newName && setUserName(newName)
  }

  return (
    <div className="todo__greeting  p-5 mb-5 sm:mb-10 rounded-xl max-w-[800px] mx-auto text-center">
      <div className="flex items-center gap-4 justify-center">
        <h1 className="todo__greeting-title font-bold font-sans text-3xl text-slate-900 dark:text-blue-200 mb-3">Hello, {userName}</h1>
        <button
          className=" bg-blue-300 p-2 rounded-xl mb-1 dark:bg-blue-200 hover:bg-blue-400 dark:hover:bg-slate-500"
          onClick={editName}
        ><MdModeEdit /></button>
      </div>
      <p className="todo__greeting-text font-sans text-xl text-slate-800 dark:text-blue-200">You have {todos.length > 0 ? todos.length : '...'} tasks:</p>
    </div>
  );
}

export default Greeting;