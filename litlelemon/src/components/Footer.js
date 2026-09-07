import logo from '../images/image.png'

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Little Lemon logo" />

            <section className="links">

                <article>
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                    </ul>
                </article>

                <article>
                    <h3>Contact</h3>
                    <ul>
                        <li>123 Lemon Street, Chicago</li>
                        <li>+1 234 567 890</li>
                        <li>littlelemon@email.com</li>
                    </ul>
                </article>

                <article>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </article>

            </section>
        </footer>
    )
}

export default Footer