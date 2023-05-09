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
        <div className="contador">
            <div className="controles">
                <button className="boton" onClick={decrement}>-</button>
                <h4 className="numero">{cantidad}</h4>
                <button className="boton" onClick={increment}>+</button>
            </div>
            <div>
                <button className="boton" onClick={()=>agregar(cantidad)} disable={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount