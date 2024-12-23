import React from "react";
import Parent from "./features/Parent";
import ParentComponent from "./features/ParentComponent";
import Counter from "./app/Counter";

const App=()=>{

    return(
        <div>
            <h1>React Manuel Kurulum</h1>
            <p>Hello React</p>
            <Parent/>
            <ParentComponent/>
            <Counter/>
        </div>
    );
};

export default App;