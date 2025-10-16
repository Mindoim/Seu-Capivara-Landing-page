import styles from './Hero.module.css'
import ContainerPrincipalHero from "./ContainerPrincipalHero/ContainerPrincipalHero.jsx";
import Menu from "../menu/Menu.jsx";
import ContainerMarketingAnimacao from "./ContainerMarketingAnimacao/ContainerMarketingAnimacao.jsx";
import CapivaraAnimacao from "../CapivaraAnimacao/CapivaraAnimacao.jsx";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <Menu></Menu>
            <ContainerPrincipalHero />
            <CapivaraAnimacao/>
            <ContainerMarketingAnimacao></ContainerMarketingAnimacao>
        </div>
    )
}

export default Hero;