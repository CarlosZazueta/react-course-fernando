import React, { useCallback, useEffect, useState } from 'react'
import '../01-useState/CounterApp.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    const increment = useCallback( (num) => {
        setCounter( c => c + num);
    }, [setCounter]);

    // Para evitar cambios por la funcion ya que si cambia es renderizado el componente de nuevo
    useEffect(() => {
        // ???
    }, [increment])

    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment}/>
        </div>
    )
}
