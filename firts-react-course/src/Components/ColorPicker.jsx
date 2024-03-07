import {useState} from "react";

function ColorPicker() {
    const [color, setColor] = useState('#FFFFFF')

    return (<div className={'color-picker-container'} style={{background: color}}>
        <div className="color-display">
            <p>Selected Color: {color}</p>
        </div>
        <input type="color" value={color}/>
    </div>)
}

export default ColorPicker