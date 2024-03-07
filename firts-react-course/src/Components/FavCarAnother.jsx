import {useState} from "react";

function FavCarAnother () {
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState('')
    const [carModel, setCarModel] = useState('')

    function handleAddCar() {
        const newCar = {year: carYear, make: carMake, model: carModel}
        setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear())
        setCarMake('')
        setCarModel('')
    }

    function handleYearChange(event) {
        setCarYear(event.target.value)
    }
    
    function handleMakeChange(event) {
        setCarMake(event.target.value)
    }

    function handleModelChange(event) {
        setCarModel(event.target.value)
    }

    return (
        <div>
            <h2>List of Car Objects</h2>
            <input type="number" value={carYear} onChange={handleYearChange}/>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder={'Enter Car Make'}/>
            <input type="text" value={carModel} onChange={handleModelChange} placeholder={'Enter Car Model'}/>
            <button onClick={handleAddCar}>Add</button>
        </div>
    )
}

export default FavCarAnother