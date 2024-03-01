import React, { useState } from 'react';
import Card from './Card';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";



export default function Testimonial(props) {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);
    function leftShiftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }


    return (
        <div className='w-[100vw] md:w-[700px] justify-center bg-white flex flex-col items-center mt-10 p-10 transition-all duration-200 hover:shadow-xl'>
            <Card reviews={reviews[index]} />

            <div className='flex text-3xl mt-5 gap text-violet-400 font-bold  gap-3 mx-auto'>
                <button className='hover:text-violet-500 cursor pointer mx-auto' onClick={leftShiftHandler}><FaChevronLeft /></button>
                <button className='hover:text-violet-500 cursor pointer mx-auto' onClick={rightShiftHandler}><FaChevronRight /></button>
            </div>
            <div>
                <button
                    onClick={surpriseHandler}
                    className='bg-violet-400 mt-4  text-white hover:bg-violet-500 transition-all duration-200 px-10 py-2 cursor-pointer rounded-md font-bold text-lg'>Surprise Me</button>
            </div>
        </div>
    )
}
