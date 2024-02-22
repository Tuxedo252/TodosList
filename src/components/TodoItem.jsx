import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Context } from "../store/store";

export default function TodoItem({ todoDate, todoName }) {
    // const handleDelete = (todoName) => {
    //     onDelete(todoName);
    // }
    const { deleteItem } = useContext(Context);

    return <>
        <div className='flex items-center justify-between m-2 hover:bg-slate-100 pt-4 pl-[8rem] pr-[8rem] pb-5 w-full'>
            <div className="p-3 w-[13rem] text-start">{todoName}</div>
            <div className="p-3 w-[10rem] text-start">{todoDate}</div>
            <button className="w-[5rem] p-2 border rounded-md flex items-center justify-center hover:bg-red-50" onClick={() => deleteItem(todoName)}>
                <MdDelete className="text-red-700 text-3xl" />
            </button>
        </div>
        <hr className="w-[100%] text-slate-900" />
    </>
}