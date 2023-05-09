import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css" 

const NavBar = ()=>{
    return(
        <nav>
        <Link to="/">
           <h2 className="marca"> Gamers Active </h2>
        </Link>
        <div>
        <NavLink to={`/categoria/Consola`} className={({isActive})=> isActive ? "ActiveOpcion" : "Opcion"}>Consolas</NavLink>
        <NavLink to={`/categoria/Juego`} className={({isActive})=> isActive ? "ActiveOpcion" : "Opcion"}>Juegos</NavLink>
        <NavLink to={`/categoria/Accesorio`} className={({isActive})=> isActive ? "ActiveOpcion" : "Opcion"}>Accesorios</NavLink>
        <CartWidget/>   
        </div>
        
        </nav>
    )
}
export default NavBar