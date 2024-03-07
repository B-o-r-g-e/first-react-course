// import Fruits from "./Fruits.jsx";
// import PropTypes from "prop-types";
import * as propTypes from "prop-types";
import {useState} from "react";

function List(props) {

    const [isEmployed, setIsEmployed] = useState(false)

    const category = props.category

    const listFruits = props.item

    const listItem = listFruits.map(item =>
        <li key={item.id}>
            {item.name}: &nbsp;
            {item.calories}
        </li>
    )

    const toggle = () => {
        setIsEmployed(!isEmployed)
    }

    return (
        <>
            <h2>{category}</h2>
            <ul>
                {listItem}
            </ul>

            <p>Is Employed: { isEmployed
                ? 'Yes'
                : 'No' }
            </p>
            <button onClick={toggle}>
                Toggle
            </button>
        </>
    )
}

List.propTypes = {
    category: propTypes.string,
    item: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        calories: propTypes.number
    }))
}

List.defaultProps = {
    category: 'Category',
    item: []
}

export default List