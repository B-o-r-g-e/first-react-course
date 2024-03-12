import {useRef} from "react";

function UseRef() {
    const ref = useRef(0);

    function handleClick() {
        ref.current++
        console.log(ref.current)
    }

    return (
        <button onClick={handleClick}>Click me</button>
    )
}

export default UseRef