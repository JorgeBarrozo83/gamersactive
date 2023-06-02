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
        <div className="Counter">
            <div className="Controls">
                <Button className="Button" onClick={decrement}>-</Button>
                <h4 className="Number">{cantidad}</h4>
                <Button className="Button" onClick={increment}>+</Button>
            </div>
            <div>
                <Button className="Button" onClick={()=>agregar(cantidad)} disable={!stock}>
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
}
export default ItemCount