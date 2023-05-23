import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../CartContext/CartContext"

const ItemDetail= ({id, name, precio, categoria, img, stock, descripcion})=>{
    const [quantityAdded, setQuantityAdded]= useState(0)

    const { addItem }=useContext(CartContext)

    const handleOnAdd=(cantidad) =>{
        setQuantityAdded(cantidad)

        const item ={
            id, name, precio, img
        }

        addItem(item, cantidad)
    }
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoria: {categoria}
                </p>
                <p className="Info">
                    Descripcion:{descripcion}
                </p>
                <p className="Info">
                    Precio:$ {precio}
                </p>
            </section>
            <footer className="ItemFooter">
            {
                    quantityAdded > 0 ?(
                        <Link to="/cart" className="Opcion">Terminar compra</Link>
                    ) : (
                        <ItemCount inicial={1} stock={stock} agregar={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail