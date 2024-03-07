import {useState} from "react";
import fruits from "./Fruits.jsx";

const UpdateArray = () => {
    const [foods, setFoods] = useState(['Apple', 'Banana', 'Orange'])

    const handleAddFood = () => {
        const newFood = document.getElementById('foodInput').value
        document.getElementById('foodInput').value = ''

        setFoods(f => [...f, newFood])
    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h2>Lists of Foods</h2>
            <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                )}
            </ul>

            <input type="text" id={'foodInput'} placeholder={'Enter food name'}/>
            <button onClick={handleAddFood}>Add</button>
        </div>
    )
}

export default UpdateArray