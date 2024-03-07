import {useState} from "react";

const FavoriteCar = () => {
    const [car, setCar]
        = useState(
            {name: 'Ford', year: 2024, model: 'Mustang'})

    return (
        <div>
            <p>Your favorite car is: {car.year} {car.name} {car.model}</p>
        </div>
    )
}

export default FavoriteCar