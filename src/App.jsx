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

  const [open, setOpen] = useState(false)


  return (
    <>
      <button onClick={() => setPage('products')}>products</button>
      <button onClick={() => setOpen(!open)}>cart ({cartLength()})</button>
      <div className={`sidebar ${open ? 'open' : ''}`}>
        <h1>Cart</h1>
        <button onClick={() => setOpen(!open)} className='sidebar-close'>X</button>
        <Cart />
      </div>
      {page === 'products' && <Products />}
    </>
  )
}

export default App
