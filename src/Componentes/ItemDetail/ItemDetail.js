import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../CartContext/CartContext"

const ItemDetail= ({id, Title, Precio, categoria, Imagen, Stock, Descripcion})=>{
    const [quantityAdded, setQuantityAdded]= useState(0)

    const { addItem }=useContext(CartContext)

    const handleOnAdd=(cantidad) =>{
        setQuantityAdded(cantidad)

        const item ={
            id, Title, Precio, Imagen
        }

        addItem(item, cantidad)
    }
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {Title}
                </h2>
            </header>
            <picture>
                <img src={Imagen} alt={Title} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoria: {categoria}
                </p>
                <p className="Info">
                    Descripcion:{Descripcion}
                </p>
                <p className="Info">
                    Precio:$ {Precio}
                </p>
            </section>
            <footer className="ItemFooter">
            {
                    quantityAdded > 0 ?(
                        <Link to="/cart" className="Opcion">Terminar compra</Link>
                    ) : (
                        <ItemCount inicial={1} stock={Stock} agregar={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail