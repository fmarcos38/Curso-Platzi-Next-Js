"use client"

//creo interfaz
interface ErrorProps {
    error: Error;
    reset: () => void;
}

import React from 'react'

function Error({error, reset }: ErrorProps) {
    return (
        <div>
            <h2>Ocurrio un Error</h2>
            <button onClick={reset}>Intentar de nuevo</button>
        </div>
    )
}

export default Error