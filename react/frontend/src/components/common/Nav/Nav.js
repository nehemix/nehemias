import { Link } from "react-router-dom"
import './Nav.css'
function Nav() {
    return (
        <nav>
            <div className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/hogar">Hogar</Link></li>
                    <li><Link to="/empresa">Empresa</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav