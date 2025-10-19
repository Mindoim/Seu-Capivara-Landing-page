import styles from './Footer.module.css';
import SocialBubble from './SocialBubble/SocialBubble.jsx';

const Footer = ({ socialLinks }) => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.socialBubblesWrapper}>
                {socialLinks.map((item, index) => (
                    <SocialBubble
                        key={index} // Idealmente, use um ID único do item, não o index
                        imageUrl={item.imageUrl}
                        link={item.link}
                        altText={item.altText}
                    />
                ))}
            </div>
        </footer>
    );
};

export default Footer;