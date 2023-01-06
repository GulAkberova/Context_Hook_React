import { useEffect, useRef } from 'react'

function useInterval({ callback, delay }) {

    const callbackRef = useRef(null)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback]);

    useEffect(() => {
        let dInterval;
        if (delay === null || delay === undefined || delay.length === 0) {
            return () => clearInterval(dInterval)
        } else {
            dInterval = setInterval(() => {
                callbackRef.current()
            }, [delay])
            return () => clearInterval(dInterval)
        }
    }, [delay])

}

export default useInterval