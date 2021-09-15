import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';

import '../01-useState/CounterApp.css';


export const MemoHook = () => {

    const { counter, increment } = useCounter(2000);
    const [show, setShow] = useState(true);


    const memoHeavyProcess = useMemo(() => heavyProcess( counter ), [ counter ]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{ counter }</small></h3>
            <hr />

            <p>{ memoHeavyProcess }</p>

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
