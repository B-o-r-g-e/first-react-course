import {useEffect, useRef, useState} from "react";

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState()
    const intervalIdRef = useRef();
    const startTimeRef = useRef();

    useEffect(() => {
        if (isRunning) {

        }
    }, [isRunning]);
    
    function start() {
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
    }
    
    function stop() {
        setIsRunning(false)
    }
    
    function reset() {
        setElapsedTime(0)
        setIsRunning(false)
    }
    
    function formatTime() {
        return `00:00:00`
    }

    return (
        <div className={'stop-watch'}>
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button className="start-button" onClick={start}>Start</button>
                <button className="stop-button" onClick={stop}>Stop</button>
                <button className="reset-button" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch