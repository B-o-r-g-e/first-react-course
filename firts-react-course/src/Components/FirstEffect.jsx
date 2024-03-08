import {useEffect, useState} from "react";

function FirstEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count: ${count}`
    });

    function addCount() {
        setCount(c => c + 1)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button>
        </div>

    )
}

export default FirstEffect