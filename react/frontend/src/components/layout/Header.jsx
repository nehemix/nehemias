import {Link} from "react-router-dom"
import '../../styles/Header.css'
function Header() {
    return (
        <div className="holder">
            <div className="logo">
                <a href="/"><img src="images/cat logo.png" height="50px" alt="logo" />
                <h1 className="nombre-empresa">Katnet</h1>
                </a>
            </div>
            <div className="navbar">
                <ul>
                    <li><Link to="hogar">Hogar</Link></li>
                    <li><Link to="empresa">Empresa</Link></li>
                    <li><Link to="blog">Blog</Link></li>
                    <li><Link to="contacto">Contacto</Link></li>
                </ul>
            </div>
        </div >
    )
}
export default Header