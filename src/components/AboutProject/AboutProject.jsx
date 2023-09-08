import "./AboutProject.css";

function AboutProject() {
    return (
        <section className="about-project" id={`learn-more`}>
            <h2 className="section-title">О проекте</h2>
            <div className="about-project__description">
                <div className="about-project__section-box">
                    <h4 className="about-project__title">
                        Дипломный проект включал 5 этапов
                    </h4>
                    <p className="about-project__text">
                        Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.
                    </p>
                </div>
                <div className="about-project__section-box">
                    <h4 className="about-project__title">
                        На выполнение диплома ушло 5 недель
                    </h4>
                    <p className="about-project__text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                        соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className="about-project__week">
                <div className="about-project__section-box">
                    <p className="about-project__week-line about-project__week-line_backend">
                        1 неделя
                    </p>
                    <p className="about-project__week-description">Back-end</p>
                </div>
                <div className="about-project__section-box">
                    <p className="about-project__week-line about-project__week-line_frontend">
                        4 недели
                    </p>
                    <p className="about-project__week-description">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;
