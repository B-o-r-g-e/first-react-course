import {useRef, useState} from "react";

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState()
    const intervalIdRef = useRef();
    const startTimeRef = useRef();

    return (
        <div>

        </div>
    )
}

export default StopWatch