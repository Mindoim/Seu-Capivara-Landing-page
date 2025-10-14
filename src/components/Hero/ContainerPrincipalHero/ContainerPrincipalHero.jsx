import styles from "./ContainerPrincipalHero.module.css"
import Text from "./Texts/Text.jsx";
import AnimacaoDigitando from "./AnimacaoDigitando/AnimacaoDigitando.jsx";

const ContainerPrincipalHero = () => {
    return (
        <div className={styles.ContainerPrincipalHero}>
            <Text></Text>
            <AnimacaoDigitando></AnimacaoDigitando>
        </div>
    )
}

export default ContainerPrincipalHero