import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Homes.css'

const Homes = (props,reviews) => {
    
    const {name, comment, ratings, img} = props.reviews;
    

    
    return (
        <div>
            <p>{reviews.length}</p>
            <h3> <span className='rating-star'> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span> {ratings}.0 
</h3>
                <p>{comment}</p>
                <small>Commented by: {name}</small> <span><img className='rev-img' src={img} alt=""  /></span>
               
               <hr />
        </div>
    );
};

export default Homes;