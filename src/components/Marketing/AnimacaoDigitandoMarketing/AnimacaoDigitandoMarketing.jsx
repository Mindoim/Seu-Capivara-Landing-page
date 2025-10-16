import {TypeAnimation} from "react-type-animation";

const AnimacaoDigitandoMarketing = () => {
    return (
        <div class="DivAnimacaoTextoDigitando MarketingAnimacaoText">
            <TypeAnimation class="styles.AnimacaoTextoDigitando"
                           sequence={[
                               '(E possivelmente a unica...)', // Types 'One'
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
            />
        </div>
    )
}

export default AnimacaoDigitandoMarketing;