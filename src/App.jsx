import { useContext, useEffect, useState } from 'react'
import './App.css'
import Cart from './Cart'
import Navbar from './components/Navbar'
import { CartContext } from './context/CartContext'
import Products from './Products'
import Checkout from './pages/Checkout'

function App() {

  const {cart, cartLength} = useContext(CartContext)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const [page, setPage] = useState('products')

  const [open, setOpen] = useState(false)

  const checkoutCart = () => {
    setOpen(!open)
    setPage('checkout')
  }

  return (
    <>
      <Navbar />
      <main>
        <button onClick={() => setPage('products')}>products</button>
        <button onClick={() => setOpen(!open)}>cart ({cartLength()})</button>
        <div className={`sidebar ${open ? 'open' : ''}`}>
          <h1>Cart</h1>
          <button onClick={() => setOpen(!open)} className='sidebar-close'>X</button>
          <Cart />
          <button onClick={() => checkoutCart()}>Check Out</button>

        </div>
        {page === 'products' && <Products />}
        {page === 'checkout' && <Checkout cart={cart} />}
      </main>
    </>
  )
}

export default App
