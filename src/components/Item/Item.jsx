import styles from './Item.module.css'
import Card from "./components/Cards/Card.jsx";
import imagem from "../../assets/capivara-logo.png";

const Item = () => {
    return (
        <div className={styles.divItem}>
            <Card position="right" ImagemDoProduto={imagem} DescricaoDoProduto={"Literalmente uma capivara, e uma capivara bem bonita" +
                " diga-se de passagem. Eu gosto de capivaras, a parte da capi nem é tão legal, mas a vara... "}
                  NomeDoProduto={'Capivara comendo folha'}></Card>
            <Card position="left" ImagemDoProduto={imagem} DescricaoDoProduto={"Literalmente uma capivara, e uma capivara bem bonita" +
                " diga-se de passagem. Eu gosto de capivaras, a parte da capi nem é tão legal, mas a vara... "}
                  NomeDoProduto={'Capivara comendo folha'}></Card>
            <Card position="right" ImagemDoProduto={imagem} DescricaoDoProduto={"Literalmente uma capivara, e uma capivara bem bonita" +
                " diga-se de passagem. Eu gosto de capivaras, a parte da capi nem é tão legal, mas a vara... "}
                  NomeDoProduto={'Capivara comendo folha'}></Card>
        </div>
    )
}

export default Item