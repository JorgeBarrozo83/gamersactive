import { Button } from "bootstrap"
import "./ItemCount.css"
import {useState} from "react"


const ItemCount= ({stock, inicial, agregar})=>{
    const [cantidad, setCantidad] = useState(inicial)

    const increment=()=>{
        if(cantidad< stock){
            setCantidad(cantidad+1)
        }
    }
    const decrement =()=>{
        if(cantidad>1){
            setCantidad(cantidad-1)
        }
    }
    return(
        <div class="contador">
            <div class="controles">
                <button class="boton" onClick={decrement}>-</button>
                <h4 class="numero">{cantidad}</h4>
                <button class="boton" onClick={increment}>+</button>
            </div>
            <div>
                <button class="boton" onClick={()=>agregar(cantidad)} disable={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount