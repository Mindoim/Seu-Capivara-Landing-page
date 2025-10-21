import './App.css'
import Item from "./components/Item/Item.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Marketing from "./components/Marketing/Marketing.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Dados para o Footer com links de imagens reais e links funcionais
const mySocialLinks = [
    {
        // Usando a API do Simple Icons para o logo do GitHub
        imageUrl: 'https://cdn.simpleicons.org/github/black',
        link: 'https://github.com/Mindoim',
        altText: 'Perfil no GitHub'
    },
    {
        // Usando a API do Simple Icons para o logo do Behance
        imageUrl: 'https://cdn.simpleicons.org/behance/black',
        link: 'https://www.behance.net/eduardogalicia3',
        altText: 'Portfólio no Behance'
    },
    {
        // Usando a API do Simple Icons para o logo do LinkedIn
        imageUrl: 'https://www.svgrepo.com/show/110227/linkedin-big-logo.svg',
        link: 'https://www.linkedin.com/in/eduardo-galiciani-80b464249/',
        altText: 'Perfil no LinkedIn'
    },
];

function App() {
    return (
        <>
            <Hero />
            <Marketing />
            <Item></Item>
            <Footer socialLinks={mySocialLinks} />
        </>
    )
}

export default App
