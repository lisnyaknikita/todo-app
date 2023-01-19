import React from 'react'

export default function Modal({children}: React.PropsWithChildren) {
    return (
        <div className="modal-blur h-full w-full bg-black-/50 fixed top-0 right-0 bottom-0 left-0 dark:bg-white/40">
            <div className='fixed rounded-xl top-1/2 left-1/2 w-72 h-64 sm:w-96 sm:h-72 bg-slate-900 -translate-x-1/2 -translate-y-1/2 p-5'>
                {children}
            </div>
        </div>
    )
}
