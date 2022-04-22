/* eslint-disable no-return-assign */
import React, { useRef } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StyledSlider, Pagination, Dot } from './styles';

export interface CarouselProps {
    /**
     * shows the count of the items to be displayed
     */
    dots?: boolean;
    /**
     * shows the prev and next arrows
     */
    arrows?: boolean;
    /**
     * decided whether the items can be passed infinitely or not
     */
    infinite?: boolean;
    /**
     * speed of transition of the items
     */
    speed?: number;
    /**
     * autoplay of the carousel
     */
    autoplay?: boolean;
    /**
     * time between the slides
     */
    autoplaySpeed?: number;
    /**
     * slide hover stop playing
     */
    pauseOnHover?: boolean;
    /**
     * decides the amount of items on display at the same time
     */
    slidesToShow?: number;
    /**
     * slide item adaptive height
     */
    adaptiveHeight?: boolean;
    /**
     * rtl direction
     */
    rtl?: boolean;
    /**
     * click on any slide to select and make it current slide
     */
    focusOnSelect?: boolean;
    /**
     * decides how many items to be passed on on scroll
     */
    slidesToScroll?: number;
    /**
     * vertical mode
     */
    vertical?: boolean;
    /**
     * verticalSwiping mode
     */
    verticalSwiping?: boolean;
    children: React.ReactNode;
    CustomPrevArrow?: React.ReactNode;
    CustomNextArrow?: React.ReactNode;
}

const Carousel = ({
    dots = true,
    arrows = true,
    autoplay = true,
    autoplaySpeed = 2000,
    pauseOnHover = false,
    rtl = false,
    infinite = true,
    speed = 500,
    slidesToShow = 1,
    slidesToScroll = 1,
    adaptiveHeight = true,
    focusOnSelect = true,
    vertical = false,
    verticalSwiping = false,
    children,
    CustomPrevArrow,
    CustomNextArrow,
    ...rest
}: CarouselProps): JSX.Element => {
    const slider = useRef<Slider>();

    const settings = {
        dots,
        infinite,
        speed,
        slidesToShow,
        slidesToScroll,
        rtl,
        adaptiveHeight,
        pauseOnHover,
        focusOnSelect,
        arrows,
        vertical,
        verticalSwiping,
        autoplay,
        autoplaySpeed,
        nextArrow: CustomNextArrow,
        prevArrow: CustomPrevArrow,
        appendDots: (allDots) => <Pagination>{allDots}</Pagination>,
        customPaging: () => <Dot />,
        ...rest,
    };
    return (
        // @ts-ignore
        <StyledSlider ref={slider} {...settings}>
            {children}
        </StyledSlider>
    );
};

export default Carousel;
