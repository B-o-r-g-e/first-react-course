import {useState} from "react";

const FavoriteCar = () => {
    const [car, setCar]
        = useState(
            {make: 'Ford', year: 2024, model: 'Mustang'})

    const handleYearChange = () => {

    }

    const handleMakeChange = () => {

    }

    const handleModelChange = () => {

    }

    return (
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year}/> <br/>
            <input type="text" value={car.make}/> <br/>
            <input type="text" value={car.model}/>
        </div>
    )
}

export default FavoriteCar