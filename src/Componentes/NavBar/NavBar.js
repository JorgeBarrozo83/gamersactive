import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css" 

const NavBar = ()=>{
    return(
        <nav>
        <h2 class="marca"> Escoje tu categoria </h2>
        <div>
        <button>Consolas</button>
        <button>Juegos</button>
        <button>Accesorios</button>
        <CartWidget/>   
        </div>
        
        </nav>
    )
}
export default NavBar