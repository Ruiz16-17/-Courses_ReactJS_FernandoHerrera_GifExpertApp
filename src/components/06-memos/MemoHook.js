import React, { useMemo, useState } from 'react';
import { heavyProcess } from '../../helpers/HeavyProcess';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MemoHook = () => {

    //Memo es para evitar llamar componentes que no necesitan ser llamados cada que se renderiza un componente, es decir, memoriza la renderización y solo la hace una vez debido a que no va a cambiar en la ejecuación del componente que lo contiene

    const {state: counter, increment} = useCounter(5000);
    const [show, setShow] = useState(true);
    
    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);
    //Aquí vemos como se usa memo, en este caso, memo debe actualizar el componente uúnicamente, cuando el componente mandado en el argumento cambie. Ahí dice, básicamente, que ejecute la función de heavyProcess cuando el counter cambie
    
    const handleAdd = () => {
        increment();
    }

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div>

            <h1>MemoHook</h1>
            <h2>Counter: 
                <small>{counter}</small>

            </h2>

            <hr/>

            <p>{memoHeavyProcess}</p>
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
