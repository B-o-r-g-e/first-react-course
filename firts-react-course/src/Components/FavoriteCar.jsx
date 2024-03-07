import {useState} from "react";

const FavoriteCar = () => {
    const [car, setCar]
        = useState(
            {name: 'Ford', year: 2024, model: 'Mustang'})

    

    return (
        <div>
            <p>Your favorite car is: {car.year} {car.name} {car.model}</p>

            <input type="number" value={car.year}/> <br/>
            <input type="text" value={car.name}/> <br/>
            <input type="text" value={car.model}/>
        </div>
    )
}

export default FavoriteCar