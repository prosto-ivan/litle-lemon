import {aboutPhoto, greekSalad, lemonDessert, bruchetta} from '../images/images'
import Card from '../components/MenuCard'
import Testimonial from '../components/Testimonial'

function Main () {
    return (
        <main className="main">
            <section className="about">
                <article>
                    <h1>Litle lemon</h1>
                    <h2>Chicago</h2>
                    <div>Ми пропонуємо багато традиційних страв  аааааааааааааааааааа ааааааааааааааа ааааааааааааааааааааааааааааааааааааааааааааааааааааааа</div>
                    <button>Order table</button>
                </article>
                <img src={aboutPhoto}/>
            </section>
            <section className='Menu'>
                <article className='another'>
                    <h2>This specoal week!!!</h2>
                    <button>Online menu</button>
                </article>
                <article className='cards'>
                    <Card source={greekSalad} name="Greak salad" description="aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaa aaaaaaaaa a aa aaaaaa" num="1"></Card>
                    <Card source={bruchetta} name="Bruchetta" description="aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaa aaa aaaaaaaaa a aa aaaaaa" num="2"></Card>
                    <Card source={lemonDessert} name="Lemon desert" description="aaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaa aaaaaaaaaa aaa aaaaaaaaa a aa aaaaaa" num="3"></Card>
                </article>
            </section>
            <section className='Testimonial'>
                <h2 style={{textAlign: "center"}}>Testimonial</h2>
                <article className='testimonials'>
                    <Testimonial
                    name="Anna"
                    dish="Greek Salad"
                    coment="The food was delicious and fresh!"
                    stars={5}
                    />

                    <Testimonial
                    name="John"
                    dish="Bruschetta"
                    coment="Very tasty food and good service."
                    stars={4}
                    />

                    <Testimonial
                    name="Emily"
                    dish="Lemon Dessert"
                    coment="Nice restaurant, but the service was a little slow."
                    stars={3}
                    />
                </article>
            </section>
        </main>
    )
}

export default Main