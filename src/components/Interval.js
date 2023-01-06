import React, { useState } from 'react'
import useInterval from '../customHooks/useInterval';


function Interval() {

    const [callback, setCallback] = useState(() => {
        return () => console.log(`interval first`)
    })
    const [delay, setDelay] = useState(2000);
    const [delayValue, setDelayValue] = useState(2000);
    const [text, setText] = useState("first");

    useInterval({ callback, delay });


    const submitDelay = () => {
        setDelay(delayValue);
    }

    const submitText = () => {
        setCallback(() => {
            return () => console.log(`interval ${text}`);
        })
    }

    return (
        <div>
            <h1>UseInterval Hook</h1>
            <h6>Change Delay</h6>
            <input type="number" value={delayValue} onChange={(e) => setDelayValue(e.target.value)} />
            <button onClick={() => submitDelay()}>Submit</button>
            <h6>Change callback</h6>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => submitText()}>Submit</button>
        </div>
    );
}

export default Interval