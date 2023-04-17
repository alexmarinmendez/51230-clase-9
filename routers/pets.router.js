import { Router } from 'express'

let pets = []

const router = Router()

//  localhost:8080/pets
router.get('/', (req, res) => {
    res.send({ pets })
})

router.post('/', (req, res) => {
    const pet = req.body
    pets.push(pet)
    res.send({ status: 'success' })
})

export default router

