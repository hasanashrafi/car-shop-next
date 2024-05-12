import React, { useState } from 'react'
import { FaLongArrowAltRight, FaSearch } from 'react-icons/fa'
import ToastComponent from '../templates/ToastComponent';
import { useRouter } from 'next/router';
function SearchBar() {
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')
    const router = useRouter()
    const searchHandler = () => {
        if (min && max) {
            router.push(`/filter/${min}/${max}`)
        } else {
            alert("Please Enter Minimum And Maximum Price!")
        }
    }
    return (
        <>

            <div className='flex flex-wrap shadow-xl w-fit p-3 px-6 mt-10 mx-auto justify-center place-items-center items-center rounded-xl bg-[#e0ebff] '>
                <input
                    value={min}
                    onChange={e => setMin((e).target.value)}
                    type='text'
                    placeholder='Enter Min Price...'
                    className='p-2 m-1 text-black focus:outline-none rounded' />

                <span className='p-2'><FaLongArrowAltRight /></span>

                <input
                    value={max}
                    onChange={(e) => setMax(e.target.value)}
                    type='text'
                    placeholder='Enter Max Price'
                    className='p-2 m-1 text-black focus:outline-none rounded' />
                <button
                    onClick={searchHandler}
                    className='p-3 m-1 border  bg-white rounded-3xl hover:bg-gray-300 ease-in-out '>
                    <FaSearch />
                </button>
            </div>
        </>
    )
}

export default SearchBar