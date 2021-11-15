import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password}  = formValues;

    useEffect(() => {
        console.log(
            'Email changed'
        );
    }, [email]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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

            <div 
                className="form-group"
            >
                <input 
                    type="password"
                    name= "password"
                    className="form-control"
                    placeholder="password"
                    value={password}
                    onChange={handleInputChange}
                >

                </input>

                <button type="submit" className="btn btn-primary">
                    save
                </button>

            </div>

        </form>
    )
}
