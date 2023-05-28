import { createContext, useState} from "react";

export const CartContext = createContext({
    cart:[]
})

export const CartProvider =({ children })=>{
    const [cart, setCart]= useState([])

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
        return cart.reduce((total, item) =>total += item.cantidad * item.precio, 0)
    }

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, sumTotal, getQuantity}}>
            { children }
        </CartContext.Provider>
    )
}


