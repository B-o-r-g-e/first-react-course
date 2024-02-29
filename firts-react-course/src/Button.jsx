function Button() {
    const handler = () => console.log('clicked')
    return (
        <button className={'button'} onClick={handler}>
            Click me
        </button>
    )
}

export default Button
