import React, { useState } from 'react';

export default function StateExampleF(){
    let [num, setNum] = useState(1);
    function decrement(){
        if (num>0)
        setNum(num-1)
    }
    function increment(){
        setNum(num+1)
    }
    return(
        <>
            <h1>State Management Functional Components</h1>
            <h2>num : {num}</h2>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>

        </>
    )
}