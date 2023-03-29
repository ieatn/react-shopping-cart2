import { useContext, useEffect, useState } from 'react'
import './App.css'
import Cart from './Cart'
import Navbar from './components/Navbar'
import { CartContext } from './context/CartContext'
import Products from './Products'
import Checkout from './pages/Checkout'

function App() {

  // getting the client to be able to use server
  const fetchServer = async () => {
    const res = await fetch(`http://localhost:3000/`)
    const data = await res.json()
    console.log(data)
  }
  // send cart to server from client and server will return a url to redirect to checkout page to client
  const sendServer = async () => {
    const res = await fetch(`http://localhost:3000/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: [
          {id: 1, quantity: 1},
          {id: 2, quantity: 2},
        ]
      })
    })
    const data = await res.json()
    window.location.href = data.url;
  }

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
        <button onClick={fetchServer}>get server</button>
        <button onClick={sendServer}>send server</button>
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
