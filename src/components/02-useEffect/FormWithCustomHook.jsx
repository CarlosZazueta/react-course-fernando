import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './SimpleForm.css';

export const FormWithCustomHook = () => {
    
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        pass: ''
    });

    const {name, email, pass} = formValues;

    useEffect(() => {
        console.log('El email cambio!')
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit = { handleSubmit }>
            <h1>FormWithCustomHook</h1>
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
                    placeholder="email@domain.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="mt-3 form-group">
                <input 
                    type="password"
                    name="pass"
                    className="form-control"
                    placeholder="Your password"
                    value={ pass }
                    onChange={ handleInputChange }
                />
            </div>

            <button 
                className="mt-3 btn btn-primary"
                type="submit"
            >
                Save
            </button>
        </form>
    )
}
