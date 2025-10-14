import VideoCapivara from '../../assets/capivara.gif'
import styles from './CapivaraAnimacao.module.css'

function CapivaraAnimacao() {
    return (
        <div>
            <img src={VideoCapivara}
                 alt="Animação de Capivara passando do lado direito ao esquerda da tela, em looping." className={styles.GifCapivara}/>
        </div>
    );
}

export default CapivaraAnimacao;