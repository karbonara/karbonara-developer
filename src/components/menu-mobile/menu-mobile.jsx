import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './menu-mobile.module.scss';
import { Spring, animated, Transition } from 'react-spring';
import { useRef } from 'react';

function MenuMobile() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const ref = useRef(null);
    return (
        <>
            <div className={styles.menu}>
                <button
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className={styles.button}>
                    <img
                        src="https://img.icons8.com/material-rounded/32/ffffff/menu--v1.png"
                        alt={'menu'} />
                </button>
                {toggleMenu && (
                    <Spring
                        immediate={!ref.current}
                        reset={true}
                        from={
                            { opacity: 0, transform: "translateX(50px)" }
                        }
                        to={[
                            { opacity: 1, transform: "translateX(0px)" },
                        ]}
                        reverse={!toggleMenu}
                        config={{ duration: 200 }}
                    >
                        {props => (
                            <animated.div style={props} ref={ref}>
                                <nav className={styles.nav__wrapper}>
                                    <button
                                        onClick={() => setToggleMenu(!toggleMenu)}
                                        className={styles.button_modal}>
                                        <img
                                            src="https://img.icons8.com/material-rounded/32/000000/delete-sign.png"
                                            alt={'menu'} />
                                    </button>
                                    <ul>
                                        <li><Link to="/">Главная</Link>{" "}</li>
                                        <li><Link to="about">Обо мне</Link></li>
                                        <li><Link to="work">Мои работы</Link></li>
                                        <li><Link to="stack">Мой стек</Link></li>
                                    </ul>
                                </nav>
                            </animated.div>
                        )}
                    </Spring>
                )}
            </div>
        </>
    );
}

export default MenuMobile;
