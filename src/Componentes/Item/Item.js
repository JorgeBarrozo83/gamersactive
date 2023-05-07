import "./Item.css"

const Item =({id, name, precio, img, stock})=>{

    return(
        <article class="CardProd">
            <header class="Header">
            <h2 class="Nombre">
                {name}
            </h2>
            </header>
            <picture>
                <img src={img} alt={name} class="Imagen"/>
            </picture>
            <section>
                <p class="Info">
                    Precio:${precio}
                </p>
                <p class="Info">
                    Stock disponible:{stock}
                </p>
            </section>
            <footer class="ItemFooter">
                <link to={`/item/${id}`} class="Opcion">Ver Detalle</link>
            </footer>
        </article>
    )
}

export default Item