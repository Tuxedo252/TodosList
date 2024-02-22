import React from "react";
import { FcTodoList } from "react-icons/fc";

export default function AppName() {
    return <div className="flex flex-start items-center justify-start">
        <FcTodoList className="text-[4rem] p-2 m-2" />
        <h1 className="text-slate-700 text-5xl mt-3 mb-5 font-bold uppercase underline">Todo App</h1>
    </div>
}

