import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email}  = formState;

    useEffect(() => {
        console.log('Welcome');
    },[]);
    //Como está el effect en esto momento quiere decir que cada que haya un cambio en el estado va a dispararce el effect

    useEffect(() => {
        console.log('formState changed');
    },[formState]);

    useEffect(() => {
        console.log('email changed');
    },[email]);

    //así, en el argumento estamos mandando lo que queremos que ejecute cuando cambie el argumento mandado como parámetro

    // useEffect(() => {
    //     console.log('Valentina perra');
    // },[]);

    // Así es para que solo se ejecute una vez, al cargar el componente

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name] : target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div 
                className="form-group"
            >
                <input 
                    type="text"
                    name= "name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                >

                </input>
            </div>

            <div 
                className="form-group"
            >
                <input 
                    type="email"
                    name= "email"
                    className="form-control"
                    placeholder="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                >

                </input>
            </div>
            
            {name === "123" && <Message />}

        </>
    )
}
