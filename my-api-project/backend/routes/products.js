const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    // res.json([
    //     // {id, title, description, price}
    //     // {product 2}
    //     // {product 3}
    // ])
    try{
        const response = await fetch('https://t.futureinnovativetech.com/data/products.json')

        // console.log(response);

        if(!response.ok){
            throw new Error('Theres a new error')
        }
        const products = await response.json()
        res.json(products)
    }
    catch(error){
        res.status(500).json({
            'message' : 'Api not responding encountered a server error'
        })

    }
})

module.exports = router;

// {
//     let x = 10
//     const y = 10
// }

// React -> express -> get -> fetch