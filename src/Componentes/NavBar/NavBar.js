import { CartContext } from "../../CartContext/CartContext"
import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css" 

const NavBar = ()=>{
    const { isLoading, setLoading } = useContext(CartContext);

  const handleNavLinkClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

    
    return(
        <nav className="Header">
        <Link to="/">
           <h2 className="ItemHeader"> Gamers Active </h2>
        </Link>
        <div className="NavBar">
        <NavLink to={`/categoria/consola`} onClick={handleNavLinkClick} className={({isActive})=> isActive ? "ActiveOpcion" : "Opcion"}>Consolas</NavLink>
        <NavLink to={`/categoria/juegos`} onClick={handleNavLinkClick} className={({isActive})=> isActive ? "ActiveOpcion" : "Opcion"}>Juegos</NavLink>
        <NavLink to={`/categoria/accesorio`} onClick={handleNavLinkClick} className={({isActive})=> isActive ? "ActiveOpcion" : "Opcion"}>Accesorios</NavLink>
        {isLoading && <p className="Loading">Cargando...</p>}
        <CartWidget/>   
        </div>
        
        </nav>
    )
}
export default NavBar