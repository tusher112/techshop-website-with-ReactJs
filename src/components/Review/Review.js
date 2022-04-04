import React from 'react';
import useReview from '../../hooks/useReview';

const Review = () => {

    const [review, setReview]=useReview()
    return (
        <div className='container pt-5'>
            <h2>Reviews ({review.length})</h2>

            <p>Get specific details about this product from customers who own it.</p>
            <hr />
            <div>

                
            </div>

        </div>
    );
};

export default Review;