import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const {counter, increment, decrement} = useCounter(1)
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>LayoutEffect!</h1>
            <hr />

            <blockquote className="blockquote text-end">
                <p
                   ref={ pTag } 
                > { quote } </p>
            </blockquote>

            <pre>{ JSON.stringify(boxSize, null, 3) }</pre>

            {
                counter > 1 && 
                    (
                        <button 
                            className="btn btn-primary"
                            onClick={ decrement }
                        >
                            Previous quote
                        </button>
                    )
            }

            {
                counter < 30 && 
                    (
                        <button 
                            className="btn btn-primary"
                            onClick={ increment }
                        >
                            Next quote
                        </button>
                    )
            }
        </div>
    )
}
