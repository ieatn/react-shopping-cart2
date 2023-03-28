import { useState } from 'react'
import './App.css'
import Cart from './Cart'
import Products from './Products'

function App() {

  const [cart, setCart] = useState([])

  const add = (e) => {
    setCart([...cart, {...e}])
  }

  const [page, setPage] = useState('products')

  return (
    <>
      <button onClick={() => setPage('products')}>products</button>
      <button onClick={() => setPage('cart')}>cart ({cart.length})</button>
      {page === 'products' && <Products add={add}/>}
      {page === 'cart' && <Cart cart={cart} setCart={setCart} />}
    </>
  )
}

export default App
