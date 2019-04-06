import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import './CarouselUp.css';

class CarouselUp extends Component
{
    render()
    {
        return(
                <Carousel className="CarouselUp">
                            <Carousel.Item>
                                <img
                                className="d-block w-100 "
                                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/4/3/5fb6f6e7-0852-42cd-9b2a-cd57bfe3b8831554290777983-desk--1-.jpg"
                                alt="First slide"
                                />
                            </Carousel.Item>


                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/4/3/9df29e19-5403-40ba-a558-20bf3f148bef1554290777971-desk2.jpg"
                                alt="Third slide"
                                />
                            </Carousel.Item>


                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/4/3/f0746560-3cfc-4499-bf14-30f97ac106301554294403530-Slide.jpg"
                                alt="Third slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/4/3/1eca0e18-6002-4d6a-bad7-28d54cf01ca51554290777944-Slide.jpg"
                                alt="First slide"
                                />
                            </Carousel.Item>
                </Carousel>
        );
    }
}

export default CarouselUp;