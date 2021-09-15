import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../01-useState/CounterApp.css';


export const Memorize = () => {

    const { counter, increment } = useCounter();
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Counter: <Small value={ counter } /></h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ increment }
            >Increment + 1</button>

            <button 
                className="mx-2 btn btn-outline-primary"
                onClick={() => {
                    setShow( !show );
                }}
            >show | Hide { JSON.stringify(show) }</button>
        </div>
    )
}
