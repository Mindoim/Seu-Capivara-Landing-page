import styles from './Card.module.css'

const Card = ({NomeDoProduto, ImagemDoProduto, DescricaoDoProduto}) => {
    return (
        <div className={styles.ContainerCard}>
            <p className={styles.NomeDoProduto}>{NomeDoProduto}</p>
            <div className={styles.ImagemDoProdutoContainer}>
                <img className={styles.ImagemDoProduto} src={ImagemDoProduto} alt={DescricaoDoProduto}/>
            </div>
            <p className={styles.DescricaoDoProduto}>{DescricaoDoProduto}</p>
        </div>
    )
}

export default Card