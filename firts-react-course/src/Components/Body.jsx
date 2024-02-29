import {useState} from "react";

const Body = () => {
    const [name, setName] = useState('Mario')

    const handler = () => {
        setName('James')
    }

    return (
        <button onClick={handler}>Click me again</button>
    )
}

export default Body