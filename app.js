import express from 'express' //ES Modules
import usersRouter from './routers/users.router.js'
import petsRouter from './routers/pets.router.js'

const logged = true

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true })) //solo es necesario cuando los datos se envian por formulario

//middleware
app.use(function (req, res, next) {
    console.log('Validando login de usuario que hizo la consulta...')
    if (logged) {
        next()
    } else {
        res.send({ error: 'No tienes permiso'})
    }
})

app.use((req, res, next) => {
    console.log('Soy otro middleware')
    next()
})

app.use(express.static('public')) // GET / (ruta raiz)
// app.use('/contenido', express.static('public')) // GET /contenido (ruta raiz)
app.use('/users', usersRouter)
app.use('/pets', petsRouter)


app.listen(8080, () => console.log('Server Up'))