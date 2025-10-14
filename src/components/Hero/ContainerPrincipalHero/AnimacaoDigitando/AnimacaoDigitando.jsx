import {TypeAnimation} from 'react-type-animation';
import styles from './AnimacaoDigitando.module.css'

function AnimacaoDigitando() {
    return (
        <div className={styles.DivText}><TypeAnimation className={styles.Animacao}
                            sequence={[
                                '(Seja bem vindo!)', // Types 'One'
                                2500,
                                '',
                                1000,
                                '(Seja bem vindo!)', // Types 'One'
                                2500,
                                '',
                                1000,
                                '(Seja bem vindo!)', // Types 'One'
                                2500,
                                '',
                                1000,
                                '(Seja bem vindo!)', // Types 'One'
                                2500,
                                '',
                                1000,
                                () => {
                                    console.log ( 'Sequence completed' );
                                },
                            ]}
                            wrapper="p"
                            speed={40}
                            cursor={true}
                            repeat={Infinity}
        /></div>
    );
}

export default AnimacaoDigitando;