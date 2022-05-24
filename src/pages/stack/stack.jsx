import styles from './stack.module.scss';

function Stack() {
    return (
        <section className={styles.stack}>
            <h2 className="p-4 text-center text-white font-bold text-4xl">Мой стек технологий</h2>
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
    );
}

export default Stack;
