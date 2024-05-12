import carsData from '@/data/carsData'
import React from 'react'
import CarsList from '../components/templates/CarsList'

function Suv() {
    const suvCars = carsData.filter((car) => car.category === 'suv')
    return <CarsList data={suvCars} />
}

export default Suv