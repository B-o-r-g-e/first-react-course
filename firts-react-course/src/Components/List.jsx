// import Fruits from "./Fruits.jsx";

function List(props) {

    const category = props.category

    const listFruits = props.item

    const listItem = listFruits.map(item =>
        <li key={item.id}>
            {item.name}: &nbsp;
            {item.calories}
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

// List.propTypes =

List.defaultProps = {
    category: 'Category',
    item: []
}

export default List