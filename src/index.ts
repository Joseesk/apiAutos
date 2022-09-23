import express from 'express'
import carsRoutes from '../src/routes/cars'
const app = express()

app.use(express.json())

const PORT = 4001

app.get('/', (_req, res) => {
    console.log('todo funciona bien')
    res.send('Funciona bien')
})

app.use('/cars', carsRoutes)

app.listen(PORT, () => {
  console.log(`el servidor está corriendo en http://localhost:${PORT}/`)
})

