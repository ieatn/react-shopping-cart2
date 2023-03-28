import { useState } from 'react'
import './App.css'
import Cart from './Cart'
import Products from './Products'

function App() {

  const [cart, setCart] = useState([])

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
      <button onClick={() => setPage('products')}>products</button>
      <button onClick={() => setPage('cart')}>cart ({cartLength()})</button>
      {page === 'products' && <Products add={add}/>}
      {page === 'cart' && <Cart cart={cart} setCart={setCart} />}
    </>
  )
}

export default App
