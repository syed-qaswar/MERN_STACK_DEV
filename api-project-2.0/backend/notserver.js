const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())


const productRoute = require('./routes/products')

app.use('/api/products', productRoute)

app.listen(5000, () => {
    console.log('Server is running on port 5000.')
});