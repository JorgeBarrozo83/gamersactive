import "./Item.css"
import { Link } from "react-router-dom"

const Item =({id, name, precio, img, stock})=>{

    return(
        <article className="CardProd">
            <header className="Header">
            <h2 className="Nombre">
                {name}
            </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="Imagen"/>
            </picture>
            <section>
                <p className="Info">
                    Precio:${precio}
                </p>
                <p className="Info">
                    Stock disponible:{stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Opcion">Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item