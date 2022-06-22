import './Header.css'
import { Nav } from '../../common'
function Header() {
    return (
        <section className='header'>
            <section className='header-top'>
                <section className='header-top_logo'>
                    <a href="/" class="logo">
                        <h2 class="nombre-empresa">katnet</h2>
                    </a>
                </section>
                <section className='header-top-navbar'>
                    <Nav />
                </section>
            </section>
        </section>
    )
}
export default Header