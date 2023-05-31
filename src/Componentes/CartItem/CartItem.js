import "./CartItem.css"
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext"
import "../CartWidget/CartWidget"
import { Link } from "react-router-dom";

const CartItem = ({ id, Title, Imagen ,Precio, cantidad }) => {
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
