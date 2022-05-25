import { motion } from 'framer-motion';
import styles from './intro-what.module.scss';

const textAnimation = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 },
    }),
}
const blockAnimationLeft = {
    hidden: {
        x: -50,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 },
    }),
}
const blockAnimationRight = {
    hidden: {
        x: 50,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 },
    }),
}
const blockAnimationOpacity = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: { delay: custom * 0.3 },
    }),
}

function IntroWhat() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4 }}
            className={styles.intro__what}
        >
            <motion.h1
                custom={1}
                variants={textAnimation}
                className='text-center text-white font-bold text-4xl mb-6'>Что я делаю?</motion.h1>
            <motion.p
                custom={2}
                variants={textAnimation}
                className='text-white font-bold text-xl my-4'>Вёрстку и фронтенд — от простых страничек до больших сервисов.</motion.p>
            <div className={styles.intro__what_item}>
                <ul>
                    <motion.li
                        custom={1}
                        variants={blockAnimationLeft}
                    >
                        <div>
                            <h3>Лендинги</h3>
                            <p>Короткие и длинные. Адаптив, скорость загрузки, микроанимации, семантика и SEO-френдли разметка.</p>
                        </div>
                    </motion.li>
                    <motion.li
                        custom={1}
                        variants={blockAnimationOpacity}
                    >
                        <div>
                            <h3>Интернет магазины и корпоративные сайты</h3>
                            <p>Страницы с интерактивом, формами, корзинами. Доступные интерфейсы для пользователей.</p>
                        </div>
                    </motion.li>
                    <motion.li
                        custom={1}
                        variants={blockAnimationRight}
                    >
                        <div>
                            <h3>Сервисы</h3>
                            <p>Медиа, агрегаторы. Большое количество страниц с похожими компонентами, много точек взаимодействия с пользователем.</p>
                        </div>
                    </motion.li>
                    <motion.li
                        custom={2}
                        variants={blockAnimationLeft}
                    >
                        <div>
                            <h3>Вёрстка под React</h3>
                            <p>Собираю компоненты для дальнейшего использования или верстаю сразу в нужном синтаксисе, без написания логики.</p>
                        </div>
                    </motion.li>
                    <motion.li
                        custom={2}
                        variants={blockAnimationOpacity}
                    >
                        <div>
                            <h3>Промо-сайты и приложения</h3>
                            <p>Небольшие сайты, в которых есть механика взаимодействия с пользователем и большое количество данных.</p>
                        </div>
                    </motion.li>
                    <motion.li custom={2}
                        variants={blockAnimationRight}
                    >
                        <div>
                            <h3>Вёрстка под WordPress</h3>
                            <p>Собираю компоненты для дальнейшего использования или верстаю сразу в нужном синтаксисе, без написания логики.</p>
                        </div>
                    </motion.li>
                </ul>
            </div>
        </motion.section>
    );
}

export default IntroWhat;
