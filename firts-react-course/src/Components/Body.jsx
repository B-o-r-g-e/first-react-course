import {useState} from "react";

const Body = () => {
    const [name, setName] = useState('Mario')
    const [age, setAge] = useState(28)

    const handler = () => {
        setName('James')
        setAge(40)
        console.log(name)
    }

    return (
        <>
            <p>{name} is {age} years old</p>
            <button onClick={handler}>Click me again</button>
        </>

    )
}

export default Body