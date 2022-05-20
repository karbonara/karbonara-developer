import { Outlet } from 'react-router-dom';
import '../../App.css';
import Header from '../header/header';

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>
                <section>
                    <img className='m-auto' width={36} src="https://i.imgur.com/NfkyvEb.png" alt="" />
                </section>
            </footer>
        </>
    );
};

export default Layout;
