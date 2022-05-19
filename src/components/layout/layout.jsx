import { Link, Outlet } from 'react-router-dom';
import '../../App.css';

function Layout() {
    return (
        <>
            <div className='link-main'>
                <h1>Karbonara</h1>
                <nav className='nav'>
                    <ul className='list-link'>
                        <li><Link to="/">Главная</Link>{" "}</li>
                        <li><Link to="about">Обо мне</Link></li>
                        <li><Link to="work">Мои работы</Link></li>
                        <li><Link to="contact">Мой стек</Link></li>
                    </ul>
                </nav>
            </div>
            <main>
                <Outlet />
            </main>
            <footer>
                <section>
                    <img width={36} src="https://i.imgur.com/NfkyvEb.png" alt="" />
                </section>
            </footer>
        </>
    );
};

export default Layout;
