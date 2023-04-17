import { Router } from 'express'

const router = Router()

//  localhost:8080/users
router.get('/', (req, res) => {
    res.send('OK nuevamente!')
})

export default router

