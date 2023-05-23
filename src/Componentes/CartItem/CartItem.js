import "./CartItem.css"
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext"
import "../CartWidget/CartWidget"
import { Link } from "react-router-dom";

const CartItem = ({ id, name, img ,precio, cantidad }) => {
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



export default CartItem;
