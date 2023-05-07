import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css" 

const NavBar = ()=>{
    return(
        <nav>
        <link to="/">
           <h2 class="marca"> Gamers Active </h2>
        </link>
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