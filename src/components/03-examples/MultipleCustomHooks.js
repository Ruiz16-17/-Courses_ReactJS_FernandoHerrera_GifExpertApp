import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { state, increment, decrement, reset } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    const { author, quote } = !!data && data[0];

    console.log(state);
    //La doble negación es para transformar un null en un false ya que si se deja solo con el data, evaluaría si es undefined, pero como nunca va a ser undefined, porque trae la data en null, siempre se cumpliría la condición, lo que generaría un error

    const handleOnclickNext = () => {
        increment(1);
    }

    const handleOnclickPrevious = () => {
        state > 1 && decrement(1);
    }

    //console.log(author,quote);

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading

                    ?

                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )

                    :

                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-2">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }

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
