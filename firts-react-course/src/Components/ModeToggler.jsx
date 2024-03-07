import {useState} from "react";

function ModeToggle() {
    // let darkModeOn = true
    // const darkMode = <h1>Dark mode is On</h1>
    // const lightMode = <h1>Light mode is On</h1>
    const [name, setName] = useState('')
    
    // function handler() {
    //     darkModeOn = !darkModeOn
    //     if (darkModeOn === true) {
    //         console.log('Dark Mode is On')
    //     } else {
    //         console.log('Light Mode is On')
    //     }
    // }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
            {/*{darkModeOn ? darkMode : lightMode}*/}
            {/*<button className={'button'} onClick={handler}>*/}
            {/*    Click me*/}
            {/*</button>*/}

            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
        </div>
    )
}

export default ModeToggle