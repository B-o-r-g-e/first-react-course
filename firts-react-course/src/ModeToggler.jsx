function ModeToggler() {


    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
        </div>
    )
}

export default ModeToggler