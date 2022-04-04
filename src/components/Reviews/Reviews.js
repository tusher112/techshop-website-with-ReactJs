import React from 'react';

const Reviews = (props) => {
    const { name, ratings,comment } = props.reviews;
    return (
        <div>   
                <h3>Rating {ratings}****</h3>
                <p>{comment}</p>
                <small>Commented by: {name}</small>
               
               <hr />
        </div>
    );
};

export default Reviews;