import styles from './Menu.module.css'
import LogoCapivaraMenu from '../../assets/capivara-menu.png'

const Menu = () => {
    return (
        <ul className={styles.containerMenu}>
            <li>Sobre nós</li>
            <li><img className={styles.imagemCapivara} src={LogoCapivaraMenu} alt="Imagem de uma capivara no menu de navegação"/></li>
            <li>Visite a loja</li>
        </ul>
    )
}

export default Menu;