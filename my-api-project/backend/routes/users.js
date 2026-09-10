const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json([
        // {id, name, email, city}
        // {product 2}
        // {product 3}
    ])
})

module.exports = router;