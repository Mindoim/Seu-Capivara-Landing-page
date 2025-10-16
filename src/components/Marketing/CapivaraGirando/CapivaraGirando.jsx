import styles from './CapivaraGirando.module.css'
import GifCapivaraGirando from '../../../assets/marketingCapivaraGirando.gif'

const CapivaraGirando = () => {
    return (
        <div className={styles.DivCapivaraGirando}>
            <img src={GifCapivaraGirando} className={styles.CapivaraGirando} alt=""/>
        </div>
    )
}

export default CapivaraGirando