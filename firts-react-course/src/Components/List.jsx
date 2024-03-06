import Fruits from "./Fruits.jsx";

function List() {
    const listItem = Fruits.map(fruit =>
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