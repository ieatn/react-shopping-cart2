import { useContext, useEffect, useState } from 'react'
import './App.css'
import Cart from './Cart'
import { CartContext } from './context/CartContext'
import Products from './Products'

function App() {

  const {cart, cartLength} = useContext(CartContext)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const [page, setPage] = useState('products')

  return (
    <>
      <button onClick={() => setPage('products')}>products</button>
      <button onClick={() => setPage('cart')}>cart ({cartLength()})</button>
      {page === 'products' && <Products />}
      {page === 'cart' && <Cart />}
    </>
  )
}

export default App
