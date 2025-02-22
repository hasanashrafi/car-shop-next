import React from 'react'
import Card from '../module/Card'

function CarsPage({ data }) {
    if (!data || data.length === 0) {
        return <div>No cars available</div>
    }

    return (
        <div className='flex flex-wrap justify-center mt-10 mb-24'>
            {
                data.map((car) => (
                    <Card key={car.id} {...car} />
                ))
            }
        </div>
    )
}

export default CarsPage