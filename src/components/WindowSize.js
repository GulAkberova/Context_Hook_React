import React from 'react'
import useWindowSize from '../customHooks/useWindowSize'

function WindowSize() {
    const {width, height} = useWindowSize();
    return (
        <div>
            <h1>window Size</h1>
            <h3>Width-{width}</h3>
            <h3>Height-{height}</h3>
        </div>
    )
}

export default WindowSize