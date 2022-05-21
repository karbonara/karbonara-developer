import styles from './link-icon-social.module.scss';
import { Spring, animated } from 'react-spring';

function LinkIconSocial() {
    return (
        <ul className={styles.link__icon_social}>
            <Spring
                from={{ opacity: 0, transform: 'translateX(-10rem)' }}
                to={[{ opacity: 1, transform: 'translateX(0rem)' },]}
                config={{ duration: 400 }}
            >{styles => (
                <animated.li style={styles}>
                    <a href="/"><img src="https://i.imgur.com/GDQEMNZ.png" alt="logo" /></a>
                </animated.li>)}
            </Spring>
            <Spring
                from={{ opacity: 0, transform: 'translateX(-10rem)' }}
                to={[{ opacity: 1, transform: 'translateX(0rem)' },]}
                config={{ duration: 450 }}
            >{styles => (
                <animated.li style={styles}>
                    <a href="https://github.com/karbonara"><img src="https://i.imgur.com/SxeqzxU.png" alt="logo" /></a>
                </animated.li>)}
            </Spring>
            <Spring
                from={{ opacity: 0, transform: 'translateX(-10rem)' }}
                to={[{ opacity: 1, transform: 'translateX(0rem)' },]}
                config={{ duration: 500 }}
            >{styles => (
                <animated.li style={styles}>
                    <a href="https://t.me/tupakarbonara"><img src="https://i.imgur.com/4V5qGZW.png" alt="logo" /></a>
                </animated.li>)}
            </Spring>
        </ul >
    );
}

export default LinkIconSocial;