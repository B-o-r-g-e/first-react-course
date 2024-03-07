import {useState} from "react";

const UpdateArray = () => {
    const [foods, setFoods] = useState(['Apple', 'Banana', 'Orange'])

    const handleAddFood = () => {
        let newFood = document.getElementById('foodInput').value
        document.getElementById('foodInput').value = ''

        setFoods(f => [...f, newFood])
    }

    // const handleRemoveFood = () => {
    //
    // }

    return (
        <div>
            <h2>Lists of Foods</h2>
            <ul>
                {foods.map((food, index) =>
                    <li key={index}>{food}</li>
                )}
            </ul>

            <input type="text" id={'foodInput'} placeholder={'Enter food name'}/>
            <button onClick={handleAddFood}>Add</button>
        </div>
    )
}

export default UpdateArray