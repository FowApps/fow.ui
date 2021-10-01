/* eslint-disable no-return-assign */
import React, { useRef } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StyledSlider, Pagination, Arrow, Dot } from './styles';

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
}: CarouselProps): JSX.Element => {
    const slider = useRef<Slider>();

    const settings = {
        dots,
        infinite,
        speed,
        slidesToShow,
        slidesToScroll,
        arrows: false,
        appendDots: (allDots) => (
            <Pagination>
                <Arrow
                    icon="chevron-left"
                    onClick={() => {
                        slider.current?.slickPrev();
                    }}
                />{' '}
                <div>{allDots}</div>
                <Arrow
                    icon="chevron-right"
                    onClick={() => {
                        slider.current?.slickNext();
                    }}
                />
            </Pagination>
        ),
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
