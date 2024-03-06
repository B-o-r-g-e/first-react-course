// import Fruits from "./Fruits.jsx";

function List() {
    const listFruits = Fruits
    const listItem = listFruits.map(fruit =>
        <li key={fruit.id}>
            {fruit.name}
        </li>
    )
    return (
        <ul>
            {listItem}
        </ul>
    )
}

export default List