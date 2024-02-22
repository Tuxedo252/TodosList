import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { Context } from "../store/store";

export const TodoItems = () => {
    const { todoItems } = useContext(Context);
    return <div className="flex flex-col justify-start items-center m-4 mt-[0rem] rounded-md p-4 h-full">
        {todoItems.map(item => (
            <TodoItem key={item.todoName} todoName={item.todoName} todoDate={item.todoDate} />
        )
        )}
    </div>
}