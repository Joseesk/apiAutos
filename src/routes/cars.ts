import express from 'express'
import * as carsService from '../services/carsService'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(carsService.getEntries())
})

router.get('/:id', (req, res) => {
    const car = carsService.findById(+req.params.id)
    return (car != null)
      ? res.send(car)
      :res.sendStatus(404)
})

router.post('/', (req, res) => {
    const {Model, Brand, Year} = req.body

    const newCar = carsService.addCars({
        Model,
        Brand,
        Year
    })
    res.json(newCar)
})

export default router