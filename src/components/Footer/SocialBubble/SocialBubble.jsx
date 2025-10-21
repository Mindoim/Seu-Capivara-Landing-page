import styles from './SocialBubble.module.css';

const SocialBubble = ({ imageUrl, link, altText = 'Social Icon' }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBubble}
            aria-label={altText} // Acessibilidade
        >
            <img src={imageUrl} alt={altText} className={styles.bubbleImage} />
        </a>
    );
};

export default SocialBubble;