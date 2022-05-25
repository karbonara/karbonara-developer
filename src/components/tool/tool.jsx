import styles from './tool.module.scss';
import { motion } from 'framer-motion';

const textAnimation = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
}
const blockAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
}

function Tool() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4 }}
            className={styles.tool}
        >
            <div className={styles.tool__item_wrapper}>
                <motion.h1
                    custom={1}
                    variants={textAnimation}
                    className='text-center text-white font-bold text-4xl mb-6'>Чем я это делаю?</motion.h1>
                <motion.p
                    custom={2}
                    variants={textAnimation}
                    className='text-white font-bold text-xl my-4'>Предпочитаю работать с собственной сборкой и знакомыми технологиями, но не боюсь работать иначе.</motion.p>
            </div>
            <div className={styles.tool__item}>
                <div>
                    <motion.p
                        custom={3}
                        variants={textAnimation}
                        className='text-white font-bold'>Основные технологии</motion.p>
                    <ul>
                        <motion.li
                            custom={1}
                            variants={blockAnimation}>
                            <img src="https://img.icons8.com/ios/39/ffffff/javascript--v1.png" alt="icon" /></motion.li>
                        <motion.li
                            custom={2}
                            variants={blockAnimation}>
                            <img src="https://img.icons8.com/ios/39/ffffff/css.png" alt="icon" /></motion.li>
                        <motion.li
                            custom={3}
                            variants={blockAnimation}>
                            <img src="https://img.icons8.com/material-outlined/39/ffffff/sass.png" alt="icon" /></motion.li>
                        <motion.li
                            custom={4}
                            variants={blockAnimation}>
                            <img src="https://img.icons8.com/ios-glyphs/39/ffffff/react.png" alt="icon" /></motion.li>
                        <motion.li
                            custom={5}
                            variants={blockAnimation}>
                            <img src="https://img.icons8.com/ios/39/ffffff/redux.png" alt="icon" /></motion.li>
                    </ul>
                    <motion.p
                        custom={3}
                        variants={textAnimation}
                        className='text-white font-bold'>Работаю с </motion.p>
                    <ul>
                        <motion.li
                            custom={1}
                            variants={blockAnimation}
                        ><img src="https://img.icons8.com/material-outlined/39/ffffff/github.png" alt="icon" /></motion.li>
                        <motion.li
                            custom={2}
                            variants={blockAnimation}
                        ><img src="https://img.icons8.com/ios/39/ffffff/gitlab.png" alt="icon" /></motion.li>
                        <motion.li
                            custom={3}
                            variants={blockAnimation}
                        ><img src="https://img.icons8.com/ios-filled/39/ffffff/filezilla.png" alt="icon" /></motion.li>
                    </ul>
                    <motion.p
                        custom={3}
                        variants={textAnimation}
                        className='text-white font-bold'>Собираю фронтенд из</motion.p>
                    <ul>
                        <motion.li
                            custom={1}
                            variants={blockAnimation}>
                            <img src="https://img.icons8.com/material-outlined/39/ffffff/figma.png" alt="icon" /></motion.li>
                        <motion.li
                            custom={2}
                            variants={blockAnimation}>
                            <img src="https://img.icons8.com/windows/32/ffffff/sketch.png" alt="icon" /></motion.li>
                        <motion.li
                            custom={3}
                            variants={blockAnimation}>
                            <img src="https://img.icons8.com/material-outlined/39/ffffff/adobe-photoshop.png" alt="icon" /></motion.li>
                        <motion.li
                            custom={4}
                            variants={blockAnimation}>
                            <img src="https://img.icons8.com/ios-glyphs/39/ffffff/adobe-illustrator.png" alt="icon" /></motion.li>
                    </ul>
                    <motion.p
                        custom={3}
                        variants={textAnimation}
                        className='text-white font-bold'>Использую для тестов</motion.p>
                    <ul>
                        <motion.li
                            custom={1}
                            variants={blockAnimation}
                        ><img src="https://img.icons8.com/material-outlined/39/ffffff/lighthouse.png" alt="icon" /></motion.li>
                    </ul>
                </div>
            </div>
        </motion.section>
    );
}

export default Tool;