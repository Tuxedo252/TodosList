import React, { useContext } from 'react'
import { Context } from '../store/store'

export default function WelcomeMessage() {
    const { todoItems } = useContext(Context)
    return (
        <>
            {todoItems.length === 0 && <p className='mt-[15rem] flex  items-center justify-center text-green-500 text-3xl mt-[5rem] font-bold mt-[15rem]'>Enjoy your day</p>}
        </>
    )
}
