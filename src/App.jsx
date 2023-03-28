import { useContext, useEffect, useState } from 'react'
import './App.css'
import Cart from './Cart'
import { CartContext } from './context/CartContext'
import Products from './Products'

const cartLS = JSON.parse(localStorage.getItem('cart') || '[]')

function App() {
  
  const {number, setNumber} = useContext(CartContext)

  const [cart, setCart] = useState(cartLS)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

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

  const [page, setPage] = useState('products')

  return (
    <>
      <div>
        <p>context: {number}</p>
        <button onClick={() => setNumber(number + 1)}>+</button>
      </div>
      <button onClick={() => setPage('products')}>products</button>
      <button onClick={() => setPage('cart')}>cart ({cartLength()})</button>
      {page === 'products' && <Products add={add}/>}
      {page === 'cart' && <Cart cart={cart} setCart={setCart} />}
    </>
  )
}

export default App
