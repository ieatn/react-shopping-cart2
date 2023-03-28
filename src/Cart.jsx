
export default function Cart({cart, setCart}) {
    
    const remove = (e) => {
        setCart(cart.filter(i => i !== e))
    }
    const total = () => {
        return Math.ceil(cart.reduce((total, i) => total + i.price, 0)*100)/100
    }   

    return (
        <>
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
        </>
    )
}
