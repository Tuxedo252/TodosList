import React from "react";
import AppName from "./components/AppName";
import TodoInput from "./components/TodoInput";
import { TodoItems } from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemContextProvider from "./store/store";
import Header from "./components/Header";

const App = () => {
  return (<TodoItemContextProvider>
    <center>
      <Header />
      <div className="flex flex-col justify-start w-md m-4 shadow-lg pb-8 h-[28.3rem] overflow-y-scroll">
        <WelcomeMessage />
        <TodoItems />
      </div>
    </center>
  </TodoItemContextProvider>)
}

export default App;


