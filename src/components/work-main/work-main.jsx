import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './work-main.module.scss';
import Slider from "react-slick";

function WorkMain() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
    return (
        <section className={styles.slider__wrapper}>
            <h1 className="p-4 text-center text-white font-bold text-4xl">Мои работы</h1>
            <Slider {...settings} className={styles.slider__main}>
                <div className={styles.slider}>
                    <img width={650} src="https://i.imgur.com/oawdTt8.png" alt="work" />
                </div>
                <div className={styles.slider}>
                    <img width={650} src="https://i.imgur.com/oawdTt8.png" alt="work" />
                </div>
                <div className={styles.slider}>
                    <img width={650} src="https://i.imgur.com/oawdTt8.png" alt="work" />
                </div>
                <div className={styles.slider}>
                    <img width={650} src="https://i.imgur.com/oawdTt8.png" alt="work" />
                </div>
                <div className={styles.slider}>
                    <img width={650} src="https://i.imgur.com/oawdTt8.png" alt="work" />
                </div>
                <div className={styles.slider}>
                    <img width={650} src="https://i.imgur.com/oawdTt8.png" alt="work" />
                </div>
            </Slider>
        </section>
    );
}

export default WorkMain;
