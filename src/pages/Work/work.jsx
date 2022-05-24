import styles from './work.module.scss';

function Work() {
    return (
        <section className={styles.work__main}>
            <h1 className="p-4 text-center text-white font-bold text-4xl">Мои работы</h1>
            <div className={styles.work}>
                <a href="https://superstasbox.ru/">
                    <img src="https://i.imgur.com/oawdTt8.png" alt="work" />
                </a>
                <a href="https://pizza-react-app.vercel.app/">
                    <img src="https://i.imgur.com/qOUZui0.png" alt="work" />
                </a>
                <a href="https://karbonara.github.io/get-smm/index.html#">
                    <img src="https://i.imgur.com/OyLtCiF.png" alt="work" />
                </a>
                <a href="https://karbonara.github.io/site_csgo-case/index.html">
                    <img src="https://i.imgur.com/FrLEsSS.png" alt="work" />
                </a>
                <a href="https://karbonara.github.io/up-steam/">
                    <img src="https://i.imgur.com/3raysZm.png" alt="work" />
                </a>
                <a href="https://karbonara.github.io/up-games/">
                    <img src="https://i.imgur.com/oB9zfIE.png" alt="work" />
                </a>
                <a href="https://karbonara.github.io/up-games/">
                    <img src="https://i.imgur.com/MEaN1GF.png" alt="work" />
                </a>
                <a href="https://karbonara.github.io/incorn/">
                    <img src="https://i.imgur.com/fzhtwj3.png" alt="work" />
                </a>
            </div>
        </section>
    );
}

export default Work;
