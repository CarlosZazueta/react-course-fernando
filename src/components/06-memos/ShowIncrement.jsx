import React from 'react'
import PropTypes from 'prop-types'


const ShowIncrement = React.memo(({ increment }) => {
    console.log('Me volvi a generar :(');

    return (
        <button
            className="mt-3 btn btn-outline-secondary"
            onClick={() => {
                increment(5);
            }}
        >
            Increment +1
        </button>
    )
    
})

ShowIncrement.prototTypes = {
    increment: PropTypes.func.isRequired
}

export {ShowIncrement};