import { useCallback } from "react";
import { useMemo } from "react";
import { useReducer } from "react";
import { Children, createContext } from "react";

export const Context = createContext({
    todoItems: [],
    addNewItem: () => { },
    deleteItem: () => { },
});


const todoItemsReducer = (currentState, action) => {
    let newTodoItems = currentState;
    if (action.type === "NEW_ITEM") {
        newTodoItems = [
            ...currentState,
            { todoName: action.payload.todoName, todoDate: action.payload.todoDate }
        ]
    }
    else if (action.type === "DELETE_ITEM") {
        newTodoItems = currentState.filter((item) => {
            return item.todoName !== action.payload.funcTodoName;
        });
    }

    return newTodoItems;
}


const TodoItemContextProvider = ({ children }) => {
    // const [todoItems, setTodoItems] = useState([])
    const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, [])


    const addNewItem = (todoName, todoDate) => {
        // const todo = { todoName: todoName, todoDate: todoDate }
        // const newTodoItems = [...todoItems, todo];
        // setTodoItems(
        //   (currentVal) => [
        //     ...currentVal,
        //     { todoName, todoDate }
        //   ]
        // );

        const newItemAction = {
            type: "NEW_ITEM",
            payload: {
                todoName,
                todoDate,
            }
        }
        dispatchTodoItems(newItemAction);
    }

    const deleteItem = useCallback((funcTodoName) => {
        // const newTodoItems = todoItems.filter((item) => {
        //   return item.todoName !== funcTodoName;
        // })
        // setTodoItems(newTodoItems);
        const deleteItemAction = {
            type: "DELETE_ITEM",
            payload: {
                funcTodoName,
            }
        }
        dispatchTodoItems(deleteItemAction);
    }, [dispatchTodoItems]);

    const arr = [1, 2, 3, 4, 5, 6];
    const sortedArray = useMemo(() => arr.sort(), [arr]);

    return (
        <Context.Provider value={{
            todoItems,
            addNewItem,
            deleteItem
        }}>
            {children}
        </Context.Provider>
    )
};

export default TodoItemContextProvider