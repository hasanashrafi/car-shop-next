import carsData from '@/data/carsData'
import React from 'react'
import CarsList from '../components/templates/CarsList'

function HatchBack() {
    const hatchBackCars = carsData.filter((car) => car.category === 'hatchback')
    return <CarsList data={hatchBackCars} />
}

export default HatchBack