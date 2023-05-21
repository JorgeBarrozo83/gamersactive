import "./CartItem.css"
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext"
import "../CartWidget/CartWidget"

const CartItem = ({ id, name,img ,precio, cantidad }) => {
  return (
    <div>
      <h4>{name}</h4>
      <picture>
      <img src={img} alt={name} className="ItemImg" />
      </picture>
      <p>Precio: ${precio}</p>
      <p>Cantidad: {cantidad}</p>
     
    </div>
  )
};



const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext);
    
    const total = 0; 
   
    return (
        <div>{Cart}
        <div>
          {cart.map((p) => {
            total += p.precio * p.cantidad;
            return <CartItem key={p.id} {...p} />;
          })}
          return (
  <div>
    
    <h3>Total: ${total}</h3>
    
  </div>
);
        </div>
        </div>
      );
      
  };
  

export default CartItem;
