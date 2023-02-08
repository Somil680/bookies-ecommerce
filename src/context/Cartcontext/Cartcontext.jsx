import { createContext, useContext, useReducer , useEffect } from "react";
import { Cartreducer , initalState  } from "../../reducer/Cartreducer";

const CartContext = createContext([])

const CartProvider = ({ children }) => {
const [cartState, dispatch] = useReducer(Cartreducer, initalState)

useEffect(() => {
    localStorage.setItem("BookiesCart" ,JSON.stringify(cartState.cart))
} ,[cartState.cart])

    return <CartContext.Provider
    value={{cartState , dispatch}}
    >{children}</CartContext.Provider>
}
 
const useCart = () => useContext(CartContext)

export {CartProvider , useCart}
