import {useState} from "react";
import list from "./List.jsx";

const UpdateArray = () => {
    const [foods, setFoods] = useState(['Apple', 'Banana', 'Orange'])

    return (
        <div>
            <h2>Lists of Foods</h2>
            <ul>
                {foods.map((food, index) =>
                    <li key={index}>{food}</li>
                )}
            </ul>
        </div>
    )
}

export default UpdateArray