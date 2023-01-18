import React, {ChangeEvent, ChangeEventHandler, MouseEventHandler, useState} from 'react'


interface GreetingNameProps {
    userName: string,
    onSetName: (newName:string) => void
}

export default function GreetingName({userName, onSetName}: GreetingNameProps) {
    const [name, setName] = useState('')

    function setNameHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }

    function nameHandler(e: any) {
        e.preventDefault();
        if (name.trim().length <= 0){
            alert("Enter your name please")
        }
        localStorage.setItem('userName', name)
        const newName = localStorage.getItem('userName')
        newName && onSetName(newName)
        setName('')
    }

    return (
        <div className="h-full w-full bg-black-/30 dark:bg-white/30">
            <div className='fixed rounded-xl top-1/2 left-1/2 w-72 h-64 sm:w-96 sm:h-72 bg-slate-900 -translate-x-1/2 -translate-y-1/2 p-5'>
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
            </div>
        </div>
    )
}
