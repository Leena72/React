import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import './CarouselDown.css';

class CarouselDown extends Component
{
    render()
    {
        return(
                <Carousel className="CarouselDown">
                            <Carousel.Item>
                                <img
                                className="d-block w-100 "
                                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/26/96a641be-a42f-4919-bacf-9d84ec173e091553594813424-Desktop_02_02--1-.jpg"
                                alt="First slide"
                                />
                            </Carousel.Item>


                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/26/4874863e-c3ac-4052-b5b9-14ef073a67631553594813440-Desktop_02_02--2-.jpg"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                </Carousel>
        );
    }
}

export default CarouselDown;