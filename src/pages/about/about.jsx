// import { aboutList } from '../../mocks/about';

function About() {

    return (
        <div className="about pt-3">
            <h1>Привет! Меня зовут Артем</h1>
            <h2>Вот немного моих технических навыков</h2>
            <ul className="about__list-items">
                {/* {aboutList.map((list) => (
                    <li key={list}>{list}</li>
                ))} */}
            </ul>
            {/* <h2>Так же, ссылочка на резюме *<a className="about__link"
                target={'https://hh.ru/resume/157b5454ff07c58f750039ed1f62734658586e'}
                href='https://hh.ru/resume/157b5454ff07c58f750039ed1f62734658586e'>клик</a>*</h2> */}
        </div>
    );
}

export default About;