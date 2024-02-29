function ModeToggler() {
    let darkModeOn = true
    const darkMode = <h1>Dark mode is On</h1>
    const lightMode = <h1>Light mode is On</h1>
    
    function handler() {
        darkModeOn = !darkModeOn

    }

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button className={'button'} onClick={handler}>
                Click me
            </button>
        </div>
    )
}

export default ModeToggler