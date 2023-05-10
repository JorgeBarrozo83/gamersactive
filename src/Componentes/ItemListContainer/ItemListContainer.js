import "./ItemListContainer.css"
import{getProductos, getProductosById} from "../../asyncMock"
import{useState , useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting})=>{
    const[productos, setProductos] = useState([])
    const {categoriaId} = useParams()
    useEffect(()=>{
       getProductos()
        .then(response =>{
            if(categoriaId){
                setProductos(response.filter((item)=> item.categoria === categoriaId))
            }else{
                setProductos(response)
            }
        })
        .catch(error =>{
            console.error(error)
        })
    }, [categoriaId])
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer