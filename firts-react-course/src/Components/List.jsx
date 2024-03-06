import Fruits from "./Fruits.jsx";

function List() {
    const listItem = Fruits.map(fruit => {
        <li key={fruit.id}>
            {fruit.name}
        </li>
    })
}

export default List