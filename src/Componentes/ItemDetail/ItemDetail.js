import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail= ({id, name, precio, categoria, img, stock, descripcion})=>{
    return(
        <article class="CardItem">
            <header class="Header">
                <h2 class="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} class="ItemImg" />
            </picture>
            <section>
                <p class="Info">
                    Categoria: {categoria}
                </p>
                <p class="Info">
                    Descripcion:{descripcion}
                </p>
                <p class="Info">
                    Precio:$ {precio}
                </p>
            </section>
            <footer class="ItemFooter">
                <ItemCount inicial={1} stock={stock} agregar={(cantidad)=>console.log("Cantidad agregada",cantidad)}/>
            </footer>
        </article>
    )
}

export default ItemDetail