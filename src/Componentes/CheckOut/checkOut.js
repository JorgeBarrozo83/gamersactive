
import { collection, getDocs, query, where, writeBatch, addDoc, serverTimestamp, documentId} from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";



const Checkout =()=>{
    const [loading, setLoading]= useState(false)
    const [orderId, setOrderId]= useState("")

    const { cart, sumTotal, clearCart} = useContext(CartContext)

    const crearOrden = async ({ name, telefono, email}) =>{
        setLoading(true)

        try{
            const objOrden = {
                buyer: {
                    name, telefono, email
                },
                items: cart,
                total: sumTotal(),
                date: serverTimestamp()
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const id = cart.map(prod => prod.id)

            const productsRef = collection(db, "Items")

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", id)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.Stock

                const productAddedToCart = cart.find( prod=>prod.id === doc.id)
                const prodQuantity = productAddedToCart?.cantidad

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else{
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }

            })

            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, "orders")

                const orderAdded = await addDoc(orderRef, objOrden)

                
                setOrderId(orderAdded.id);
                clearCart()
            }else{
                console.error("hay productos fuera de stock")
            }
        }catch (error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    if(loading){
        return <h2>Se esta generando su orden...</h2>
    }

    if(orderId){
        return <h2>El Id de su orden es : {orderId}</h2>
    } console.log(orderId)

    return(
        <div>
            <h2>Checkout</h2>
            <CheckoutForm onConfirm={ crearOrden } />
        </div>
    )
}


export default Checkout