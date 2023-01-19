import React, { ChangeEvent, ChangeEventHandler, MouseEventHandler, useState } from 'react'
import Modal from './Modal';


interface GreetingNameProps {
    userName: string,
    onSetName: (newName: string) => void
}

export default function GreetingName({ userName, onSetName }: GreetingNameProps) {
    const [name, setName] = useState('')

    function setNameHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }

    function nameHandler(e: React.FormEvent) {
        e.preventDefault();
        if (name.trim().length <= 0) {
            alert("Enter your name please")
        }
        localStorage.setItem('userName', name)
        const newName = localStorage.getItem('userName')
        newName && onSetName(newName)
        setName('')
    }

    return (
        <Modal>
            <form action="submit" className='h-full flex flex-col justify-center'>
                <h2 className='text-slate-300 text-center font-bold text-2xl mb-4'>We need your name</h2>
                <input type="text"
                    placeholder='Enter your name...'
                    className='bg-transparent border border-slate-300 rounded-xl px-3 py-2 text-slate-300 outline-none mb-4'
                    value={name}
                    onChange={setNameHandler}
                />
                <button
                    className='text-slate-300 px-3 py-2 border border-slate-300 rounded-xl w-1/2 mx-auto'
                    onClick={nameHandler}
                >Enter</button>
            </form>
        </Modal>


    )
}
