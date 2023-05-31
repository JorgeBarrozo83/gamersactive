import "./Item.css"
import { Link } from "react-router-dom"

const Item =({id, Title, Precio, Imagen, Stock})=>{

    return(
        <article className="CardItem">
            <header className="Header">
            <h2 className="ItemHeader">
                {Title}
            </h2>
            </header>
            <picture>
                <img src={Imagen} alt={Title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio:${Precio}
                </p>
                <p className="Info">
                    Stock disponible:{Stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Opcion">Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item