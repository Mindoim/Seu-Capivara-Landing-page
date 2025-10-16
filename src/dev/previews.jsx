import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Hero from "../components/Hero/Hero.jsx";
import Text from "../components/Hero/ContainerPrincipalHero/Texts/Text.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Hero">
                <Hero/>
            </ComponentPreview>
            <ComponentPreview path="/Text">
                <Text/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews