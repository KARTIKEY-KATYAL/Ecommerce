import express , {Router} from "express"

const router = Router()

// Get all products
router.get('/', (req, res) => {
    res.send('Get all products')
})

// Get single product by ID 
router.get('/:id', (req, res) => {
    res.send(`Get product ${req.params.id}`)
})

// Create new product
router.post('/', (req, res) => {
    res.send('Create new product')
})

// Update product
router.put('/:id', (req, res) => {
    res.send(`Update product ${req.params.id}`)
})

// Delete product
router.delete('/:id', (req, res) => {
    res.send(`Delete product ${req.params.id}`)
})



export default router