import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


export default function Card(props) {
    let reviews = props.reviews;
    return (
        <div className='flex flex-col md:relative'>
            <div className='absolute top-[-7rem] z-[10] mx-auto'>
                <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' src={reviews.image} alt="" />
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]'></div>
            </div>
            <div className='text-center mt-7'>
                <p className='font-bold text-2 capitalize'>{reviews.name}</p>
            </div>
            <div>
                <p className='text-violet-300 uppercase text-sm'>{reviews.job}</p>
            </div>
            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft />
            </div>
            <div className='text-center mt-7'>
                <p>{reviews.text}</p>
            </div>
            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight />
            </div>
            <div className='flex text-3xl mt-5 gap text-violet-400 font-bold  gap-3 mx-auto'>
                <button className='hover:text-violet-500 cursor pointer'><FaChevronLeft /></button>
                <button className='hover:text-violet-500 cursor pointer'><FaChevronRight /></button>
            </div>
            <div>
                <button className='bg-violet-400 mt-1  text-white hover:bg-violet-500 transition-all duration-200 px-10 py-2 cursor-pointer rounded-md font-bold text-lg'>Surprise Me</button>
            </div>
        </div>
    )
}
