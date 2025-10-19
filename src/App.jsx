import './App.css';
import Hero from "./components/Hero/Hero.jsx";
import Marketing from "./components/Marketing/Marketing.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Dados para o Footer com links de imagens reais e links funcionais
const mySocialLinks = [
    {
        // Usando a API do Simple Icons para o logo do GitHub
        imageUrl: 'https://cdn.simpleicons.org/github/black',
        link: 'https://github.com',
        altText: 'Perfil no GitHub'
    },
    {
        // Usando a API do Simple Icons para o logo do Behance
        imageUrl: 'https://cdn.simpleicons.org/behance/black',
        link: 'https://www.behance.net',
        altText: 'Portfólio no Behance'
    },
    {
        // Usando a API do Simple Icons para o logo do LinkedIn
        imageUrl: 'https://cdn.simpleicons.org/linkedin/black',
        link: 'https://www.linkedin.com',
        altText: 'Perfil no LinkedIn'
    },
];

function App() {
    return (
        <div className="App">
            <main>
                <Hero />
                <Marketing />
            </main>
            {/* Passando os dados com os links para o Footer */}
            <Footer socialLinks={mySocialLinks} />
        </div>
    )
}

export default App;