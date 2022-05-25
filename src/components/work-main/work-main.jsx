import styles from './work-main.module.scss';
import Slider from "react-slick";
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function WorkMain() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const SliderTextAnimation = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.3 },
        }),
    }

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4 }}
            className={styles.slider__wrapper}
        >
            <motion.h1
                variants={SliderTextAnimation}
                className="p-4 text-center text-white font-bold text-4xl">Мои работы</motion.h1>
            <Slider {...settings} className={styles.slider__main}>
                <div className={styles.slider}>
                    <img width={650} src="https://i.imgur.com/3raysZm.png" alt="work" />
                </div>
                <div className={styles.slider}>
                    <img width={650} src="https://i.imgur.com/qOUZui0.png" alt="work" />
                </div>
                <div className={styles.slider}>
                    <img width={650} src="https://i.imgur.com/FrLEsSS.png" alt="work" />
                </div>
                <div className={styles.slider}>
                    <img width={650} src="https://i.imgur.com/oawdTt8.png" alt="work" />
                </div>
                <div className={styles.slider}>
                    <img width={650} src="https://i.imgur.com/oB9zfIE.png" alt="work" />
                </div>
                <div className={styles.slider}>
                    <img width={650} src="https://i.imgur.com/fzhtwj3.png" alt="work" />
                </div>
            </Slider>
        </motion.section>
    );
}

export default WorkMain;
