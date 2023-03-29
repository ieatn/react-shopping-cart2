// npm init -y for package.json
// npm i express stripe dotenv nodemon cors
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

// stripe needs everything in smallest unit which is cents
const store = new Map([
    [1, {name: 'battery', priceInCents: '299'}],
    [2, {name: 'blanket', priceInCents: '999'}],
])

// basic postman server routes actions
app.get('/', (req, res) => {
    res.json({msg: 'hello'})
})
app.post('/', async (req, res) => {
    // get stripe session object with very specific parameters which returns a checkout page url
    try {
        const session = await stripe.checkout.sessions.create({
            // stripe allows you to pick your payment option
            payment_method_types: ['card'],
            mode: 'payment',
            // get cart from client and find in shop in this server
            line_items: req.body.items.map(i => {
                const item = store.get(i.id)
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.name
                        },
                        unit_amount: item.priceInCents,
                    },
                    quantity: i.quantity
                }
            }),
            success_url: `${process.env.CLIENT_URL}/success.html`,
            cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
        })
        res.json({url: session.url})
    } catch (e) {
        res.status(500).json({err: e.message})
    }
})

app.listen(3000)