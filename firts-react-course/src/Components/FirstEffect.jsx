import {useEffect, useState} from "react";

function FirstEffect() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('green')

    useEffect(() => {
        document.title = `Count: ${count}`
        // document.title = `My Counter Program`
    });

    function addCount() {
        setCount(c => c + 1)
    }

    function subtractCount() {
        setCount(c => c - 1)
    }

    function changeColor() {
        setColor(c => c === 'green' ? 'red' : 'green')
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br/>
            <button onClick={changeColor}>Change Color</button>
        </div>

    )
}


export default FirstEffect