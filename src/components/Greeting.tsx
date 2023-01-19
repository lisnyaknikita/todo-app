import { ITodo } from "../types/types";
import { useState } from "react";
import { MdModeEdit } from 'react-icons/md'
import Modal from "./Modal";

interface GreetingProps {
  todos: ITodo[],
  userName: string,
  setUserName: (userName: string) => void
}
function Greeting({ todos, userName, setUserName }: GreetingProps) {
  const [name, setName] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  function editName(e: React.FormEvent) {
    e.preventDefault()
    setIsOpen(true)
    const newName = name;
    newName && localStorage.setItem('userName', newName)
    newName && setUserName(newName)
    newName && setIsOpen(false)
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
      {isOpen &&
        <Modal>
          <form action="submit" className='h-full flex flex-col justify-center relative'>
            <h2 className='text-slate-300 text-center font-bold text-2xl mb-4'>We need your name</h2>
            <input type="text"
              placeholder='Enter your name...'
              className='bg-transparent border border-slate-300 rounded-xl px-3 py-2 text-slate-300 outline-none mb-4'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <button
              className='text-slate-300 px-3 py-2 border border-slate-300 rounded-xl w-1/2 mx-auto'
              onClick={editName}
            >Enter</button>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-0"
            >❌</button>
          </form>
        </Modal>
      }

    </div>
  );
}

export default Greeting;