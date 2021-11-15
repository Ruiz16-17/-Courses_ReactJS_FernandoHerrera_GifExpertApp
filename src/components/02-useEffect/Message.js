import React, { useEffect, useState } from 'react';

export const Message = () => {

    
    const [coordinates, setCoordinates] = useState({x: 0, y:0})

useEffect(() => {
    console.log("Component created ");

    const mouseMove = (event) => {
        
        const coords = {x: event.x, y: event.y}
        console.log(coords);
        setCoordinates(coords);
    }

    window.addEventListener('mousemove',mouseMove );

    return () => {
        console.log("Component removed ");
        window.removeEventListener('mousemove',mouseMove)
        // si no se remueve el listener, cada que haya una petición se añadirá un nuevo listener, lo que eventualmente consumirá toda la memoria
    }
}, [])

    return (
        <div>
            <h3>Your are awesome</h3>
            <h4>Coors: x: {coordinates.x}  y: {coordinates.y}</h4>
        </div>
    )
}
