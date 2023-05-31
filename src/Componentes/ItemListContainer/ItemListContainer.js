import "./ItemListContainer.css"
import{useState , useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig"


const ItemListContainer = ({greeting})=>{
    const[productos, setProductos] = useState([])
    const[loading, setLoading] = useState(true)

    const {categoriaId} = useParams()

    useEffect(()=>{
        setLoading(true)
 
        const collectionRef = categoriaId
        ? query(collection(db, "Items"), where("categoria", "==", categoriaId))
        : collection (db, "Items")
 
        getDocs(collectionRef)
        .then((response) =>{
         const productosAdapted = response.docs.map((doc) =>{
             const data = doc.data()
             return { id: doc.id, ...data }
         })
         setProductos(productosAdapted)
        })
        .catch(error =>{
         console.log(error)
        })
        .finally(() => {
         setLoading(false);
         });
        },[categoriaId])
       
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
    }

export default ItemListContainer