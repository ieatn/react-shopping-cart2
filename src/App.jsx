import { useState } from 'react'

import './App.css'

function App() {

  const [products] = useState([
    {
      name: 'battery',
      price: 2.99,
      img: 'https://i0.wp.com/vision-forward.org/wp-content/uploads/2018/10/AA-Battery.jpg?fit=1280%2C1280&ssl=1',
    },
    {
      name: 'blanket',
      price: 9.99,
      img: 'https://m.media-amazon.com/images/I/81-x+F2EsHL.jpg',
    },
  ])
  
  const [cart, setCart] = useState([])

  const add = (e) => {
    setCart([...cart, {...e}])
  }

  const remove = (e) => {
    setCart(cart.filter(i => i !== e))
  }

  const total = () => {
    return Math.ceil(cart.reduce((total, i) => total + i.price, 0)*100)/100
  }

  return (
    <div>
      <h1>Products</h1>
      <button>cart ({cart.length})</button>
      <div className="grid">
        {products.map((i, idx) => (
          <div key={idx}>
            <p>{i.name}</p>
            <p>{i.price}</p>
            <img src={i.img} alt="" />
            <button onClick={() => add(i)}>add</button>
          </div>
        ))}
      </div>

      <h1>Cart</h1>
      <div>Total: {total()}</div>
      <div className="grid">
        {cart.map((i, idx) => (
          <div key={idx}>
            <p>{i.name}</p>
            <p>{i.price}</p>
            <img src={i.img} alt="" />
            <button onClick={() => remove(i)}>remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
