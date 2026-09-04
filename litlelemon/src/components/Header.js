import Nav from '../components/Nav'
import logo from '../images/image.png'

function Header () {
    return (
        <header className='header'>
            <img src={logo}/>
            <Nav></Nav>
        </header>
    )
}

export default Header