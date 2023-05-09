import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail= ({id, name, precio, categoria, img, stock, descripcion})=>{
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
                <ItemCount inicial={1} stock={stock} agregar={(cantidad)=>console.log("Cantidad agregada",cantidad)}/>
            </footer>
        </article>
    )
}

export default ItemDetail