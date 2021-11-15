import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import { Small } from './Small';

export const Memorize = () => {

    //Memo es para evitar llamar componentes que no necesitan ser llamados cada que se renderiza un componente, es decir, memoriza la renderización y solo la hace una vez debido a que no va a cambiar en la ejecuación del componente que lo contiene

    const {state: counter, increment} = useCounter();

    const [show, setShow] = useState(true);

    const handleAdd = () => {
        increment();
    }

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div>

            <h1>Memorize</h1>
            <h2>Counter: 
                <Small value={counter}/>

            </h2>

            <hr/>

            <button 
                className="btn btn-primary"
                onClick={handleAdd}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={handleShow}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}
