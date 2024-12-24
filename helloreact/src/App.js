import React from "react";
import Parent from "./features/Parent";
import ParentComponent from "./features/ParentComponent";
import Counter from "./app/Counter";
import CounterFunc from "./app/CounterFunc";
import TodoList from "./app/TodoList";
import LifecycleDemo from "./app/LifeCycleDemo";
import UserListFC from "./app/UserListFC";
const App=()=>{

    return(
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
        </div>
    );
};

export default App;