import { useState } from 'react'

export default function Products({add}) {
    const [products] = useState([
        {
            name: 'battery',
            price: 2.99,
            img: 'https://i0.wp.com/vision-forward.org/wp-content/uploads/2018/10/AA-Battery.jpg?fit=1280%2C1280&ssl=1',
            category: 'electronics',
        },
        {
            name: 'blanket',
            price: 9.99,
            img: 'https://m.media-amazon.com/images/I/81-x+F2EsHL.jpg',
            category: 'home',
        },
    ])

    const [category, setCategory] = useState('home')

    const getCategory = () => {
        return products.filter(i => i.category === category)
    }

    return (
        <>
            <h1>Products</h1>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="home">home</option>
                <option value="electronics">electronics</option>
            </select>
            <div className="grid">
                {getCategory().map((i, idx) => (
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
