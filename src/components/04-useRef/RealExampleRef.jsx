import React, { useState } from 'react'

import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import '../01-useState/CounterApp.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    const showComponent = () => setShow(!show);

    return (
        <div>

            <h1>Real Example Ref</h1>

            <button
                className="mt-3 btn btn-outline-primary"
                onClick={ showComponent }
            >{!show ? 'Show' : 'Hide'}</button>
            
            <hr />

            { show && <MultipleCustomHooks /> }

        </div>
    )
}
