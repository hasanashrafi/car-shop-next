import React from 'react'
import Company from '../icons/Company'
import Model from '../icons/Model'
import Calender from '../icons/Calender'
import Road from '../icons/Road'
import Location from '../icons/Location'
import Money from '../icons/Money'
import { sp } from '../module/helpers/speratedNumbers'

function CarsDetail(props) {
    const { id, name, model, year, distance, location, description, image, price } = props

    return (
        <div className='flex flex-col max-w-4xl m-auto my-5 justify-center'>
            <img src={image} className='w-full rounded-md' />
            <h3 className='my-3 self-center text-2xl font-bold'> {`${name} ${model}`}</h3>
            <div className='flex flex-wrap w-full  justify-around text-md font-semibold shadow-xl p-2 my-5 bg-white rounded-md'>
                
                <div className='flex p-2 place-items-center  '>
                    <Company />
                    <p className='ml-2 text-md font-semibold'>Company:</p>
                    <span className='text-gray ml-2' >{name}</span>
                </div>

                <div className='flex p-2 place-items-center ml-5 justify-center'>
                    <Model />
                    <p className='ml-2 text-md font-semibold'>Model:</p>
                    <span className='text-gray ml-2'>{model}</span>
                </div>
                
                <div className='flex p-2 place-items-center ml-5 justify-center'>
                    <Calender />
                    <p className='ml-2 text-md font-semibold'>First Registration:</p>
                    <span className='text-gray ml-2'>{year}</span>
                </div>
                <div className='flex p-2 place-items-center ml-5 justify-center'>
                    <Road />
                    <p className='ml-2 text-md font-semibold'>kms driven:</p>
                    <span className='text-gray ml-2'>{sp(distance)}</span>
                </div>

            </div>
            <div className='bg-white p-3 rounded-md shadow-lg'>
                <div className='flex justify-between border border-white  p-1'>
                    <Location />
                    <p className='ml-2 text-lg font-semibold'>Location:</p>
                    <span className='text-gray ml-auto text-lg font-semibold'>{location}</span>
                </div>
            </div>
            <div className='bg-white my-3 p-3 rounded-md shadow-lg'>
                <div className='   p-1'>
                    <description />
                    <p>Extra Information:</p>
                    <p>{description}</p>
                </div>
            </div>
            <div className='bg-white p-3 my-3 rounded-md shadow-lg'>
                <div className='flex  place-items-center   p-1'>
                    <Money />
                    <p className='text-lg font-semibold ml-2'>Price:</p>
                    <span className='text-gray ml-auto text-lg font-semibold'>${sp(price)}</span>
                </div>
            </div>
            <button className='w-full p-3 rounded-md my-5 bg-blue-600 text-white hover:opacity-90 shadow-lg'>Buy</button>
        </div>
    )
}

export default CarsDetail