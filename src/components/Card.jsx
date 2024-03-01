import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


export default function Card(props) {
    let reviews = props.reviews;
    return (
        <div>
            <div>
                <img src={reviews.image} alt="" />
            </div>
            <div>
                <p>{reviews.name}</p>
            </div>
            <div>
                <p>{reviews.job}</p>
            </div>
            <div>
                <FaQuoteLeft />
            </div>
            <div>
                <p>{reviews.text}</p>
            </div>
            <div>
                <FaQuoteRight />
            </div>
            <div>
                <button>+</button>
                <button>-</button>
            </div>
            <div>Surprise Me</div>
        </div>
    )
}
