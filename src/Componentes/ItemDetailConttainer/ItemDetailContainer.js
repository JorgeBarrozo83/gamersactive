import "./ItemDetailContainer.css"
import { useState,useEffect } from "react"
import {getProductosById} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer =()=>{
   const [producto, setProducto] = useState (null)

const{itemId}= useParams()

    useEffect(()=>{
        getProductosById(itemId)
        .then(response =>{setProducto(response)})
        .cach(error=>{console.error(error)})
    }, [])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer