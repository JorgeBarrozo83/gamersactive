import CartWidget from "../CartWidget/CartWidget"

const NavBar = ()=>{
    return(
        <nav>
        <h2>Gamers Active</h2>
        <div>
        <button>Consolas</button>
        <button>Juegos</button>
        <button>Accesorios</button>   
        </div>
        <CartWidget/>
        </nav>
    )
}
export default NavBar