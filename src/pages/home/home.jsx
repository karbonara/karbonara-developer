import LinkIconSocial from '../../components/link-icon-social/link-icon-social';
import WorkMain from '../../components/work-main/work-main';
import styles from './home.module.scss';
import { Spring, animated } from 'react-spring'

function Home() {

    return (
        <>

            <div className={styles.home}>
                <LinkIconSocial />
                <div className={styles.home__wrapper}>
                    <Spring

                        from={{ opacity: 0 }}
                        to={[
                            { opacity: 1 },
                        ]}
                        config={{ duration: 2000 }}
                    >
                        {styles => (
                            <animated.div style={styles}>
                                <h3 >Hello! I’m</h3>

                            </animated.div>
                        )}
                    </Spring>
                    <Spring

                        from={{ opacity: 0 }}
                        to={[
                            { opacity: 1 },
                        ]}
                        config={{ duration: 3500 }}
                    >
                        {styles => (
                            <animated.div style={styles}>
                                <h1>Artem Karbonara</h1>
                                <h1>JavaScript & React Developer</h1>
                            </animated.div>
                        )}
                    </Spring>

                </div>
            </div>
            <WorkMain />
            <section>
                <h1 className="text-center text-white font-bold text-4xl">Мой стек технологий</h1>
                <ul className="w-5/12 py-5 mx-auto text-white font-bold text-xl">
                    <li>JavaScript / TypeScript</li>
                    <li>React</li>
                    <li>Redux / Redux Toolkit</li>
                    <li>SCSS / Styled-Components / CSS Modules React</li>
                    <li>Material UI / Tailwind Css / Bootstrap</li>
                    <li>Webpack / Gulp</li>
                    <li>Git / GitHub / GitLab</li>
                    <li>JSON / Axios</li>
                    <li>BEM</li>
                    <li>Leaflet.js</li>
                    <li>ESLint</li>
                    <li>Accessibility</li>
                    <li>Figma / Adobe Photoshop / Sketch</li>
                </ul>
            </section>
        </>
    );
}

export default Home;
