export default function Cart({cart, setCart}) {
    
    const remove = (e) => {
        setCart(cart.filter(i => i !== e))
    }
    const total = () => {
        return Math.ceil(cart.reduce((total, i) => total + (i.price*i.quantity), 0)*100)/100
    }   
    const clear = () => {
        setCart([])
    }

    const setQuantity = (e, amount) => {
        let newCart = [...cart]
        let inCart = cart.find(i => i.name === e.name)
        inCart.quantity = amount
        setCart(newCart)
    }

    return (
        <>
            <h1>Cart</h1>
            <div>Total: {total()}</div>
            {cart.length > 0 && (
                <button onClick={() => clear()}>clear</button>
            )}
            <div className="grid">
                {cart.map((i, idx) => (
                    <div key={idx}>
                        <p>{i.name}</p>
                        <p>{i.price}</p>
                        <input onChange={(e) => setQuantity(i, parseInt(e.target.value))} value={i.quantity} />
                        <img src={i.img} alt="" />
                        <button onClick={() => remove(i)}>remove</button>
                    </div>
                ))}
            </div>
        </>
    )
}
