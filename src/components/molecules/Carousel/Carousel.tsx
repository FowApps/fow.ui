import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface CarouselProps {
    /**
     * dots
     */
    dots?: boolean;
    /**
     * infinite
     */
    infinite?: boolean;
    /**
     * speed
     */
    speed?: number;
    /**
     * slides to show
     */
    slidesToShow?: number;
    /**
     * slides to scroll
     */
    slidesToScroll?: number;
    children: React.ReactNode;
}

const Carousel = ({
    dots = true,
    infinite = true,
    speed = 500,
    slidesToShow = 1,
    slidesToScroll = 1,
    children,
    ...rest
}: CarouselProps): JSX.Element => (
    <Slider
        dots={dots}
        infinite={infinite}
        speed={speed}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        {...rest}>
        {children}
    </Slider>
);

export default Carousel;
