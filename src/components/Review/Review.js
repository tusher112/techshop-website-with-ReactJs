import React from 'react';
import useReview from '../../hooks/useReview';
import Home from '../Home/Home';
import Reviews from '../Reviews/Reviews';

const Review = () => {

    const [review, setReview] = useReview();
    // console.log(review)
    // console.log(setReview)
    return (
        <div className='container pt-5'>
            <h2>Reviews ({review.length})</h2>

            <p>Get specific details about this product from customers who own it.</p>
            <hr />
            <div>
                {
                    review.map(reviews => <Reviews
                        key={reviews.id}
                        reviews={reviews}
                    ></Reviews>)
                }


            </div>

        </div>
    );
};

export default Review;