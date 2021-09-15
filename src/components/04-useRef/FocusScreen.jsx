import React, { useRef } from 'react'
import '../02-useEffect/SimpleForm.css'

export const FocusScreen = () => {

    const inputRef = useRef();
    // console.log(ref);

    // Set focus on input
    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            
            <input
                ref={ inputRef }
                className="form-control" 
                type="text" 
                placeholder="Your name..."
            />

            <button
                className="mt-3 btn btn-outline-primary"
                onClick={ handleClick }
            >Focus</button>
        </div>
    )
}
