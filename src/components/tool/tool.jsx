import styles from './tool.module.scss';

function Tool() {
    return (
        <section className={styles.tool}>
            <div className={styles.tool__item_wrapper}>
                <h1 className='text-center text-white font-bold text-4xl mb-6'>Чем я это делаю?</h1>
                <p className='text-white font-bold text-xl my-4'>Предпочитаю работать с собственной сборкой и знакомыми технологиями, но не боюсь работать иначе.</p>
            </div>
            <div className={styles.tool__item}>
                <div>
                    <p className='text-white font-bold'>Основные технологии</p>
                    <ul>
                        <li><img src="https://img.icons8.com/ios/39/ffffff/javascript--v1.png" alt="icon" /></li>
                        <li><img src="https://img.icons8.com/ios/39/ffffff/css.png" alt="icon" /></li>
                        <li><img src="https://img.icons8.com/material-outlined/39/ffffff/sass.png" alt="icon" /></li>
                        <li><img src="https://img.icons8.com/ios-glyphs/39/ffffff/react.png" alt="icon" /></li>
                        <li><img src="https://img.icons8.com/ios/39/ffffff/redux.png" alt="icon" /></li>
                    </ul>
                    <p className='text-white font-bold'>Работаю с </p>
                    <ul>
                        <li><img src="https://img.icons8.com/material-outlined/39/ffffff/github.png" alt="icon" /></li>
                        <li><img src="https://img.icons8.com/ios/39/ffffff/gitlab.png" alt="icon" /></li>
                        <li><img src="https://img.icons8.com/ios-filled/39/ffffff/filezilla.png" alt="icon" /></li>
                    </ul>
                    <p className='text-white font-bold'>Собираю фронтенд из</p>
                    <ul>
                        <li><img src="https://img.icons8.com/material-outlined/39/ffffff/figma.png" alt="icon" /></li>
                        <li><img src="https://img.icons8.com/windows/32/ffffff/sketch.png" alt="icon" /></li>
                        <li><img src="https://img.icons8.com/material-outlined/39/ffffff/adobe-photoshop.png" alt="icon" /></li>
                        <li><img src="https://img.icons8.com/ios-glyphs/39/ffffff/adobe-illustrator.png" alt="icon" /></li>
                    </ul>
                    <p className='text-white font-bold'>Использую для тестов</p>
                    <ul>
                        <li><img src="https://img.icons8.com/material-outlined/39/ffffff/lighthouse.png" alt="icon" /></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Tool;