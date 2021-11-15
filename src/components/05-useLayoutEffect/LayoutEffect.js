import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const LayoutEffect = () => {

    const { state, increment, decrement, reset } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    const { quote } = !!data && data[0];

    //La doble negación es para transformar un null en un false ya que si se deja solo con el data, evaluaría si es undefined, pero como nunca va a ser undefined, porque trae la data en null, siempre se cumpliría la condición, lo que generaría un error

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        
        return () => {
            setBoxSize(pTag.current.getBoundingClientRect());
        };
    }, [quote])

    const handleOnclickNext = () => {
        increment(1);
    }

    const handleOnclickPrevious = () => {
        state > 1 && decrement(1);
    }

    //console.log(author,quote);

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p 
                    className="mb-2"
                    ref={pTag}
                >{quote}</p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>

            <button className="btn btn-primary" onClick={handleOnclickPrevious}>
                Previous quote
            </button>

            <button className="btn btn-primary" onClick={reset}>
                First
            </button>

            <button className="btn btn-primary" onClick={handleOnclickNext}>
                Next quote
            </button>
        </div>
    )
}
