import './Promo.css';
import projectLogo from "../../images/logo-planet.svg"

function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <a className="promo__link" href='#learn-more'>Узнать больше</a>
            </div>
            <img className="promo__logo-image circle"  src={projectLogo} alt="Логотип проекта" />
        </section>
    )
};

export default Promo;