import { Button } from "bootstrap";
import { createContext, useState} from "react";


export const CartContext = createContext({
    cart:[],
    isLoading: false,
    setLoading: () => {},
})

export const CartProvider =({ children })=>{
    const [cart, setCart]= useState([])
    const [isLoading, setIsLoading] = useState(false);
    
    const getQuantity = () => {
        let cant = 0
        cart.forEach((e) => cant += e.cantidad)
        return cant
    };

    const addItem= (item, cantidad)=>{
        if(!isInCart(item.id)) {
            setCart(prev =>[...prev, {...item, cantidad}])
        } else{
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) =>{
        console.log(itemId)
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart =()=>{
        setCart([])
    }

    const isInCart = (itemId) =>{
        return cart.some(prod => prod.id === itemId)
    }

    const sumTotal = () =>{
        return cart.reduce((total, item) =>total += item.cantidad * item.Precio, 0)
    }
    
    const setLoading = (value) => {
        setIsLoading(value);
      };

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, sumTotal, getQuantity, isLoading, setLoading}}>
            { children }
        </CartContext.Provider>
    )
}


