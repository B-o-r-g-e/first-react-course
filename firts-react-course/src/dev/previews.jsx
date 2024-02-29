import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import ModeToggler from "../ModeToggler.jsx";
import Body from "../Components/Body.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ModeToggler">
                <ModeToggler/>
            </ComponentPreview>
            <ComponentPreview path="/Body">
                <Body/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews