import { React, useContext, useRef } from 'react'
import { useState } from 'react';
import { TbPlaylistAdd } from "react-icons/tb";
import { Context } from '../store/store';

export default function TodoInput() {
    // const [todoName, setTodoName] = useState("");
    // const [todoDate, setTodoDate] = useState("");

    // const handleName = (e) => {
    //     setTodoName(e.target.value);
    // }

    // const handleDueDate = (e) => {
    //     setTodoDate(e.target.value);
    // }
    // const handleAddClick = (e) => {
    //     e.preventDefault();
    //     onAddClick(todoName, todoDate);
    //     setTodoDate("");
    //     setTodoName("");
    // }

    const { addNewItem } = useContext(Context);

    const todoNameElement = useRef();
    const dueDateElement = useRef();

    const handleAddClick = (e) => {
        e.preventDefault();
        const todoName = todoNameElement.current.value;
        const todoDate = dueDateElement.current.value;
        todoNameElement.current.value = "";
        dueDateElement.current.value = "";
        addNewItem(todoName, todoDate);
    }
    return (
        <form onSubmit={handleAddClick} className='fixed top-[4rem] left-[8rem] w-[80%] shadow-md flex items-center justify-between m-4 mb-0 border rounded-md p-4 pl-9 pr-9 bg-slate-700'>
            <input
                // onChange={handleName} 
                // value={todoName} 
                ref={todoNameElement}
                className='w-[25rem] p-4 m-2 text-slate-900 border rounded-md outline-none hover:shadow-lg focus:shadow-lg' type="text" placeholder="Enter work here..." />
            <input
                // onChange={handleDueDate}
                //  value={todoDate} 
                ref={dueDateElement}
                className='w-[20rem] p-4 m-2 text-slate-900 border outline-none rounded-md hover:shadow-lg focus:shadow-lg' type="date" />
            <button className={`w-[5rem] p-1 m-2 border rounded-md flex items-center justify-center cursor-pointer hover:bg-green-50`} >
                <TbPlaylistAdd className={`text-green-700 text-5xl`} />
            </button>
        </form>
    )
}
