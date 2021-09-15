import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './CounterApp.css';

const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(0);    

    return (
        <>
            <h1>Counter with custom hook: {state}</h1>
            <hr />

            <button onClick={ () => increment(2) } className="btn btn-primary"> + 1 </button>
            <button onClick={ reset } className="btn"> Reset </button>
            <button onClick={ () => decrement(2) } className="btn btn-secondary"> - 1 </button>
        </>
    );
};

export default CounterWithCustomHook;