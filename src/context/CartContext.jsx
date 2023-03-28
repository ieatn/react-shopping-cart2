import { createContext, useState } from "react";

const cartLS = JSON.parse(localStorage.getItem('cart') || '[]')

export const CartContext = createContext()
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(cartLS)

    const cartLength = () => {
      return cart.reduce((total, i) => total + i.quantity, 0)
    }
  
    const add = (e) => {
        let newCart = [...cart]
        let inCart = cart.find(i => i.name === e.name)
        if (inCart) {
          inCart.quantity++
          console.log('here')
        } else {
          e = {
            ...e, quantity: 1
          }
          newCart.push(e)
        }
        setCart(newCart)
      }


    return (
        <CartContext.Provider value={{cart, setCart, cartLength, add}}>
            {children}
        </CartContext.Provider>
    )
}
