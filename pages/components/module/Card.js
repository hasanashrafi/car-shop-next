import React from 'react'
import Location from '../icons/Location'
import Link from 'next/link'
import sp from './helpers/speratedNumbers'
import Image from 'next/image'

function Card(props) {
    const { id, name, model, year, distance, location, image, price } = props

    return (
        <Link href={`/cars/${id}`}>
            <div className='w-fit m-5 bg-white shadow-xl rounded-md overflow-hidden p-3'>
                <Image priority alt={name} src={image} className='max-w-80 rounded-sm min-h-64' />
                <h4 className='my-3 font-semibold'>{`${name} - ${model}`}</h4>
                <p className='text-gray my-1 '>{`${year} - ${sp(distance)}km`}</p>
                <div className='flex justify-between mt-5 '>
                    <p className='bg-[#1db954] text-white rounded-md p-1 px-2 text-0.5 font-semibold'>${sp(price)}</p>
                    <div className='flex flex-end place-items-center'>
                        <p className='mr-1 font-semibold'>{location}</p>
                        <Location />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card