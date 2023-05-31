import "./ItemDetailContainer.css"
import { useState,useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig"

const ItemDetailContainer =()=>{
   const [producto, setProducto] = useState ([])
   const [loading, setLoading] = useState(true)

const{itemId}= useParams()

    useEffect(()=>{
        setLoading(true)

        const docRef = doc(db, "Items", itemId)

        getDoc(docRef)
        .then(response =>{
            const data = response.data()
            const productosAdapted= { id: response.id, ...data}
            setProducto(productosAdapted)
        })
        .catch(error=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer