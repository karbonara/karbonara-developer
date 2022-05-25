import styles from './work.module.scss';
import { motion } from 'framer-motion';

const textAnimation = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { ease: "easeOut", delay: custom * 0.2 },
    }),
}
const blockAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: { ease: "easeOut", delay: custom * 0.2 },
    }),
}

function Work() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className={styles.work__main}>
            <motion.h1
                custom={1}
                variants={textAnimation}
                className="p-4 text-center text-white font-bold text-4xl">Мои работы</motion.h1>
            <div className={styles.work}>
                <motion.a
                    custom={1}
                    variants={blockAnimation}
                    href="https://superstasbox.ru/" target="_blank">
                    <img src="https://i.imgur.com/jiJoN7i.png" alt="work" />
                </motion.a>
                <motion.a
                    custom={2}
                    variants={blockAnimation}
                    href="https://pizza-react-app.vercel.app/" target="_blank">
                    <img src="https://i.imgur.com/3wtKlKP.png" alt="work" />
                </motion.a>
                <motion.a
                    custom={3}
                    variants={blockAnimation}
                    href="https://karbonara.github.io/get-smm/index.html#" target="_blank">
                    <img src="https://i.imgur.com/HyXjBlG.png" alt="work" />
                </motion.a>
                <motion.a
                    custom={4}
                    variants={blockAnimation}
                    href="https://karbonara.github.io/site_csgo-case/index.html" target="_blank">
                    <img src="https://i.imgur.com/9RfGyej.png" alt="work" />
                </motion.a>
                <motion.a
                    custom={5}
                    variants={blockAnimation}
                    href="https://karbonara.github.io/up-steam/" target="_blank">
                    <img src="https://i.imgur.com/2n9aU5L.png" alt="work" />
                </motion.a>
                <motion.a
                    custom={6}
                    variants={blockAnimation}
                    href="https://karbonara.github.io/up-games/" target="_blank">
                    <img src="https://i.imgur.com/AqEmdyU.png" alt="work" />
                </motion.a>
                <motion.a
                    custom={7}
                    variants={blockAnimation}
                    href="https://karbonara.github.io/up-games/" target="_blank">
                    <img src="https://i.imgur.com/QxFonDc.png" alt="work" />
                </motion.a>
                <motion.a
                    custom={8}
                    variants={blockAnimation}
                    href="https://karbonara.github.io/incorn/" target="_blank">
                    <img src="https://i.imgur.com/APfA541.png" alt="work" />
                </motion.a>
            </div>
        </motion.section>
    );
}

export default Work;
