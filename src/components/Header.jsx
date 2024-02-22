import React from 'react'
import AppName from './AppName'
import TodoInput from './TodoInput'

export default function Header() {
    return (
        <div className='w-full h-[15rem] bg-slate-200 z-11'>
            <AppName />
            <TodoInput />
        </div>
    )
}
