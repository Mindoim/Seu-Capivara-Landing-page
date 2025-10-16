import styles from './Marketing.module.css'
import TextosMarketing from "./TextosMarketing/TextosMarketing.jsx";
import AnimacaoDigitandoMarketing from "./AnimacaoDigitandoMarketing/AnimacaoDigitandoMarketing.jsx";
import CapivaraGirando from "./CapivaraGirando/CapivaraGirando.jsx";
import ConheçaNossosProdutos from "./ConheçaNossosProdutos/ConheçaNossosProdutos.jsx";

function Marketing() {
    return (
        <div className={styles.ContainerMarketing}>
            <AnimacaoDigitandoMarketing />
            <TextosMarketing />
            <CapivaraGirando />
            <ConheçaNossosProdutos />

        </div>
    );
}

export default Marketing;