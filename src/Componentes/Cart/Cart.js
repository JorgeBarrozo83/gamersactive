import "./Cart.css"
import { useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart =()=>{
    const{ cart, clearCart, getQuantity, removeItem, sumTotal} = useContext(CartContext)
    
    if(getQuantity() === 0) {
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="Option">Productos</Link>
            </div>
        )
    }

    return(
        <div>
            { cart.map(p=>{return(<div> <CartItem key={p.id} {...p}/><button onClick={()=> removeItem(p.id)} className="Button">X</button></div>)})}
            
            <h3>Total: ${sumTotal()}</h3>
            <button onClick={()=> clearCart()} className="Button">Limpiar carrito</button>
            <Link to="/checkout" className="Option">Checkout</Link>
        </div>
    )
}

export default Cart