import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Hero from "../components/Hero/Hero.jsx";
import Text from "../components/Hero/ContainerPrincipalHero/Texts/Text.jsx";
import ContainerMarketingAnimacao from "../components/Hero/ContainerMarketingAnimacao/ContainerMarketingAnimacao.jsx";
import Marketing from "../components/Marketing/Marketing.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Hero">
                <Hero/>
            </ComponentPreview>
            <ComponentPreview path="/Text">
                <Text/>
            </ComponentPreview>
            <ComponentPreview
                path="/ContainerMarketingAnimacao">
                <ContainerMarketingAnimacao/>
            </ComponentPreview>
            <ComponentPreview path="/Marketing">
                <Marketing/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews