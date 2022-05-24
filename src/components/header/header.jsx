import { Link } from 'react-router-dom';
import MenuMobile from '../menu-mobile/menu-mobile';
import styles from './header.module.scss';

function Header() {
    return (
        <div className={styles.link__main}>
            <h1>Karbonara</h1>
            <nav className={styles.nav}>
                <ul className={styles.list__link}>
                    <li><Link to="/">Главная</Link>{" "}</li>
                    {/* <li><Link to="about">Обо мне</Link></li> */}
                    <li><Link to="work">Мои работы</Link></li>
                    <li><Link to="stack">Мой стек</Link></li>
                </ul>
            </nav>
            <MenuMobile />
        </div>
    );
}

export default Header;
