import carsData from './cars.json'
import {  carsList, newCarEntrie } from './types'

const Cars: carsList[] = carsData as carsList[]

export const getEntries = (): carsList[] => Cars

export const findById = (id: number): carsList | undefined  => {
    const entry = Cars.find(d => d.Id === id)
    return entry
    
}

export const addCars = ( NewCarEntrie: newCarEntrie ): carsList  =>  {
    const newCar = {
        Id: Math.max(...Cars.map(d => d.Id))+1,
        ...NewCarEntrie
    }
    Cars.push(newCar)
    return newCar

}