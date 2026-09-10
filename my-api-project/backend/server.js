const express = require('express');
const cors = require('cors');
const app = express()
app.use(cors())

// app.get('/api/products', (req, res) => {
//     const products = [
//         {
//             id: 1,
//             title: 'Product 1',
//             price: '200Rs'
//         },
//         {
//             id: 2,
//             title: 'Product 2',
//             price: '400Rs'
//         }
//     ]
//     res.send(products).json()
// });

const productRoute = require('./routes/products')
const userRoute = require('./routes/users')

app.use('/api/products', productRoute)
app.use('/api/users', userRoute)


app.listen(5000, () => {
    console.log('Express server is running on port 5000')
})

// product.js -> for products api