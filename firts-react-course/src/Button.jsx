// function Button() {
//     const handler = () => console.log('clicked')
//     return (
//         <button className={'button'} onClick={handler}>
//             Click me
//         </button>
//     )
// }
//
// export default Button

function Button() {
    const handler = () => console.log('mouse over')
    return (
        <button className={'button'} onMouseOver={handler}>
            Click me
        </button>
    )
}

export default Button
