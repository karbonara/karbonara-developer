import LinkIconSocial from '../../components/link-icon-social/link-icon-social';
import WorkMain from '../../components/work-main/work-main';
import styles from './home.module.scss';
import { Spring, animated } from 'react-spring';
import Tool from '../../components/tool/tool';
import IntroWhat from '../../components/intro-what/intro-what';

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
            <IntroWhat />
            <Tool />
        </>
    );
}

export default Home;
