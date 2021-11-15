import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    const {counter1, counter2} = state;

    const handleAdd = () => {
        setState({
            ...state,
            counter1: counter1 + 1,
        });
    }

    return (
        <>
            {/* <h1>Counter {counter}</h1> */}
            <h2>Counter1 {counter1}</h2>
            <h2>Counter2 {counter2}</h2>

            <hr/>

            <button 
            className="btn btn-primary"
            onClick={handleAdd}
            >
                +1
            </button>
        </>
    )
}
