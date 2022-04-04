import React from 'react';
import useReview from '../../hooks/useReview';
import Homes from '../Homes/Homes';
import Review from '../Review/Review';
import './Home.css'


const Home = () => {
            const [review,setReview]=useReview();
    return (
        <div>
            <div className='home-container'>
                <div className='home-heading'>
                    <h1>Make your Computer 100X Faster!</h1>
                    <p className='para-heading'> The GeForce RTX 3060 is a performance-segment graphics card by NVIDIA, launched on January 12th, 2021. Built on the 8 nm process, and based on the GA106 graphics processor, in its GA106-300-A1 variant, the card supports DirectX 12 Ultimate. This ensures that all modern games will run on GeForce RTX 3060.
                    </p>
                    <button className='demo-btn'>Live Demo</button>

                </div>

                <div className='home-item'>
                    <img src="https://www.easyshoppi.com/wp-content/uploads/2020/12/3060-dual.jpg" alt="" />
                </div>

            </div>

            <hr />

            <div >
                <h1 >Customer Review</h1>
                            
                 {
                    review.map(reviews => <Homes
                        key={reviews.id}
                        reviews={reviews}
                    ></Homes>)
                }
            
            </div>
        </div>
    );
};

export default Home;