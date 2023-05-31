import { Button } from "bootstrap"
import "./ItemCount.css"
import {useState} from "react"


const ItemCount= ({Stock, inicial, agregar})=>{
    const [cantidad, setCantidad] = useState(inicial)

    const increment=()=>{
        if(cantidad< Stock){
            setCantidad(cantidad+1)
        }
    }
    const decrement =()=>{
        if(cantidad>1){
            setCantidad(cantidad-1)
        }
    }
    return(
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={decrement}>-</button>
                <h4 className="Number">{cantidad}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={()=>agregar(cantidad)} disable={!Stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount