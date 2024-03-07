import {useState} from "react";

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

            <input type="text" id={'foodInput'} placeholder={'Enter food name'}/>
            <button>Add</button>
        </div>
    )
}

export default UpdateArray