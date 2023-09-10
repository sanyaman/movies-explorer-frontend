import "./AboutMe.css";
import { Link } from "react-router-dom";
import Telegramm from "../../images/telegram.svg";
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
                    <Link className="telegramm__link " to="https://t.me/sanyamanjz">
                        <img src={Telegramm} alt="Telegramm" />
                    </Link>
                </div>
                <img className="about__avatar " src={avatar} alt="фото" />
            </div>
        </section>
    );
}

export default AboutMe;
