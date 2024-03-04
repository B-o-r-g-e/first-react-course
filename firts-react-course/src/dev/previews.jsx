import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import ModeToggler from "../ModeToggler.jsx";
import Body from "../Components/Body.jsx";
import Create from "../Components/Create.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ModeToggler">
                <ModeToggler/>
            </ComponentPreview>
            <ComponentPreview path="/Body">
                <Body/>
            </ComponentPreview>
            <ComponentPreview path="/Create">
                <Create/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews