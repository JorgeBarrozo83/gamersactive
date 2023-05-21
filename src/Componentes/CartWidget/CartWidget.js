import cart from "./assets/carrito.png"
import { useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { Link } from "react-router-dom"

const CartWidget = ()=>{
    const{ totalQuantity }= useContext(CartContext)
    return(
        <Link to="/cart">
            <img className="CartImg" src={cart} alt="cart-widget"/>
            { totalQuantity }
        </Link>
    )
}
export default CartWidget