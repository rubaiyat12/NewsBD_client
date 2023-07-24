import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import brand1 from '../../../assests/brand/PicsArt_03-05-02.22.17.jpg'
import brand2 from '../../../assests/brand/PicsArt_02-08-01.38.26.jpg'


const Carosel = () => {
    return (
        
            <Carousel>
                <Carousel.Item>
                    
                    
                </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' src={ brand1} alt="First slide" />
                    
                    
            </Carousel.Item>
            <img className='d-block w-100' src={brand2} alt="Second slide" />
                
            </Carousel>
            
       
    );
};

export default Carosel;