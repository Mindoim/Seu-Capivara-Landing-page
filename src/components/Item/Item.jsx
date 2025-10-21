import styles from './Item.module.css'
import Carrosel from "./components/Carrosel/Carrosel.jsx";

const Item = () => {
    return (
        <div className={styles.divItem}>
            <Carrosel></Carrosel>
        </div>
    )
}

export default Item