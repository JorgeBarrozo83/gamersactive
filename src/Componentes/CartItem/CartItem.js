import "./CartItem.css"
import React from "react";
import "../CartWidget/CartWidget"


const CartItem = ({ Title, Imagen ,Precio, cantidad }) => {
  return (
    <div>
      <h4>{Title}</h4>
      <picture>
      <img src={Imagen} alt={Title} className="ItemImg" />
      </picture>
      <p>Precio: ${Precio}</p>
      <p>Cantidad: {cantidad}</p>
      
     
    </div>
  )
};



export default CartItem;
