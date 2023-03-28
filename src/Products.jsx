import { useState } from 'react'

export default function Products({add}) {
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
    return (
        <>
        <h1>Products</h1>
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
        </>
    )   
}