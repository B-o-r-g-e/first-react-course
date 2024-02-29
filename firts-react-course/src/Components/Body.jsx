import {useState} from "react";

const Body = () => {
    const [name, setName] = useState('mario')

    const handler = () => {

    }

    return (
        <button onClick={handler}>Click me again</button>
    )
}

export default Body