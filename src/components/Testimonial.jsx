import React from 'react';
import Card from './Card';

export default function Testimonial(props) {
    let reviews = props.reviews;
    return (
        <div>
            <Card reviews={reviews[3]} />

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
