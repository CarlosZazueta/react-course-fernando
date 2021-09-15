import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coordsState, setCoordsState] = useState({ x: 0, y:0 });
    const {x, y} = coordsState

    useEffect(() => {

        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y};
            setCoordsState(coords);
        }
        
        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []); 

    return (
        <>
            <h3>x: {x}, y: {y}</h3>
        </>
    )
}
