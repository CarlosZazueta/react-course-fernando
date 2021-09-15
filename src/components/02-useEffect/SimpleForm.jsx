import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import './SimpleForm.css';

export const SimpleForm = () => {
    
    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect(() => {
        // console.log('Hey!');
    }, []);

    useEffect(() => {
        // console.log('form state cambio!');
    }, [formState]);

    const handleInputChange = ({ target }) => {
        setformState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name..."
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="mt-3 form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Your email..."
                    autoComplete="off"
                    value={ email    }
                    onChange={ handleInputChange }
                />
            </div>

            {(name === '123') && <Message />}
        </>
    )
}
