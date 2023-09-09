import "./AboutMe.css";
import avatar from "../../images/avaa.png";

function AboutMe() {
    return (
        <section className="about__me">
            <h2 className="section-title">Студент</h2>
            <div className="about__info">
                <div className="about__section">
                    <h4 className="about__name">Володька</h4>
                    <p className="about__description">Фронтенд-разработчик, 70 лет</p>
                    <p className="about__text">
                        Российский государственный и политический деятель. Действующий
                        президент Российской Федерации, председатель Государственного Совета
                        Российской Федерации и Совета Безопасности Российской Федерации;
                        Верховный главнокомандующий Вооружёнными силами
                    </p>
                    <a
                        className="about__link"
                        href="https://github.com/sanyaman"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Github
                    </a>
                </div>
                <img className="about__avatar" src={avatar} alt="фото" />
            </div>
        </section>
    );
}

export default AboutMe;
