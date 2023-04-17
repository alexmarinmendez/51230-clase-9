import express from 'express' //ES Modules
import usersRouter from './routers/users.router.js'
import petsRouter from './routers/pets.router.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true })) //solo es necesario cuando los datos se envian por formulario
app.use(express.static('public')) // GET / (ruta raiz)
// app.use('/contenido', express.static('public')) // GET /contenido (ruta raiz)

app.use('/users', usersRouter)
app.use('/pets', petsRouter)


app.listen(8080, () => console.log('Server Up'))