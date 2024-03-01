import React from 'react'

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
        </div>
    )
}
