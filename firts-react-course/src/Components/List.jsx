// import Fruits from "./Fruits.jsx";

function List(props) {

    const category = props.category

    const listFruits = props.item

    const listItem = listFruits.map(fruit =>
        <li key={fruit.id}>
            {fruit.name}
        </li>
    )
    return (
        <>
            <h2>{category}</h2>
            <ul>
                {listItem}
            </ul>
        </>

    )
}

export default List