import './Promo.css';
import '../Animation/icon.css'
// import projectLogo from "../../images/logo-planet.svg"

function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <a className="promo__link" href='#learn-more'>Узнать больше</a>
            </div>
            {/* <img className="promo__logo-image bounce "  src={projectLogo} alt="Логотип проекта" /> */}
            <div className="atom">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
            </div>
        </section>
    )
};

export default Promo;