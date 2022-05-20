import styles from './link-icon-social.module.scss';

function LinkIconSocial() {
    return (
        <ul className={styles.link__icon_social}>
            <li>
                <a href="/"><img src="https://i.imgur.com/GDQEMNZ.png" alt="logo" /></a>
            </li>
            <li>
                <a href="https://github.com/karbonara"><img src="https://i.imgur.com/SxeqzxU.png" alt="logo" /></a>
            </li>
            <li>
                <a href="https://t.me/tupakarbonara"><img src="https://i.imgur.com/4V5qGZW.png" alt="logo" /></a>
            </li>
        </ul >
    );
}

export default LinkIconSocial;