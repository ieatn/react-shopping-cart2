import { createContext, useState } from "react";

export const CartContext = createContext()
export const CartProvider = ({children}) => {
    const [number, setNumber] = useState(1)
    return (
        <CartContext.Provider value={{number, setNumber}}>
            {children}
        </CartContext.Provider>
    )
}
