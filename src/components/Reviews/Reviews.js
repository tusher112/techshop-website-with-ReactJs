import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import React from 'react';



const Reviews = (props) => {
    const { name, ratings,comment,img } = props.reviews;
    return (
        <div>   
                <h3><span className='rating-star'> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>{ratings}</h3> <FontAwesomeIcon icon="fa-solid fa-star" />
                <p>{comment}</p>
                <small>Commented by: <img className='rev-img' src={img} alt=""  /> {name}</small>
               
               <hr />
        </div>
    );
};

export default Reviews;