import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../01-useState/counter.css';

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(100);

    return (
        <>

            <h1>CounterWithCustomHook {state}</h1>
            <hr/>

            <button onClick={() => increment()} className="btn btn-primary">+</button>
            <button onClick={reset} className="btn btn-primary">Reset</button>
            <button onClick={() => decrement()} className="btn btn-primary">-</button>
        </>
    )
}
