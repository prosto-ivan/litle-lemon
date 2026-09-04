import {aboutPhoto} from '../images/images'

function Main () {
    return (
        <main className="main">
            <section className="about">
                <article>
                    <h1>Litle lemon</h1>
                    <h3>Chicago</h3>
                    <div>Ми пропонуємо багато традиційних страв  аааааааааааааааааааа ааааааааааааааа ааааааааааааааааааааааааааааааааааааааааааааааааааааааа</div>
                    <button>Order table</button>
                </article>
                <img src={aboutPhoto}/>
            </section>
            <section>
                Секція "Меню"
            </section>
            <section>
                Секція "Відгуки"
            </section>
            <section>
                Секція "Хуй знає"
            </section>
        </main>
    )
}

export default Main