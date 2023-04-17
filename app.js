import express from 'express' //ES Modules
import usersRouter from './routers/users.router.js'
import petsRouter from './routers/pets.router.js'

const logged = false

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true })) //solo es necesario cuando los datos se envian por formulario

const middleware1 = function (req, res, next) {
    console.log('Validando login de usuario que hizo la consulta...')
    if (logged) {
        next()
    } else {
        res.send({ error: 'No tienes permiso'})
    }
}

const middleware2 = (req, res, next) => {
    console.log('Soy otro middleware')
    next()
}

app.use(express.static('public')) // GET / (ruta raiz)
// app.use('/contenido', express.static('public')) // GET /contenido (ruta raiz)
app.use('/users', usersRouter)
app.use('/pets', middleware2, middleware1,  petsRouter)


app.listen(8080, () => console.log('Server Up'))