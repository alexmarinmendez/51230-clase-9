import express from 'express' //ES Modules
import usersRouter from './routers/users.router.js'

const app = express()

app.use('/users', usersRouter)


app.listen(8080, () => console.log('Server Up'))