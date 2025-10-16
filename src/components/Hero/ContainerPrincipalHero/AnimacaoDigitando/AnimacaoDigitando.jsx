import {TypeAnimation} from 'react-type-animation';

function AnimacaoDigitando() {
    return (
        <div class="DivAnimacaoTextoDigitando">
            <TypeAnimation class="styles.AnimacaoTextoDigitando"
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