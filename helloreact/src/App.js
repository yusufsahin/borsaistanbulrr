import React from "react";
import Parent from "./features/Parent";
import ParentComponent from "./features/ParentComponent";
import Counter from "./app/Counter";
import CounterFunc from "./app/CounterFunc";
import TodoList from "./app/TodoList";
import LifecycleDemo from "./app/LifeCycleDemo";
import UserListFC from "./app/UserListFC";
import { CounterProvider } from "./app/CounterContext";
import CounterDisplay from "./app/CounterDisplay";
import CounterControl from "./app/CounterControl";
const App=()=>{

    return(
    <CounterProvider>
        <div>
            <h1>React Manuel Kurulum</h1>
            <p>Hello React</p>
            <Parent/>
            <ParentComponent/>
            <Counter/>
            <CounterFunc/>
            <TodoList/>
            <LifecycleDemo/>
            <UserListFC/>
            <CounterDisplay/>
            <CounterControl/>      
        </div>
    </CounterProvider>
    );
};

export default App;