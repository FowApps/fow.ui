import React from 'react';
import { Story, Meta } from '@storybook/react';
import Carousel, { CarouselProps } from './Carousel';
import Icon from '../../atoms/Icon';

export default {
    title: 'Molecules/Carousel',
    component: Carousel,
    argTypes: {
        dots: {
            control: 'boolean',
        },
        infinite: {
            control: 'boolean',
        },
    },
} as Meta;

const Template: Story<CarouselProps> = (args) => (
    <Carousel {...args}>
        <div>
            <img
                style={{ margin: 'auto' }}
                src={'https://via.placeholder.com/150x100'}
            />
        </div>
        <div>
            <img
                style={{ margin: 'auto' }}
                src={'https://via.placeholder.com/250x100'}
            />
        </div>
        <div>
            <img
                style={{ margin: 'auto' }}
                src={'https://via.placeholder.com/150x100'}
            />
        </div>
    </Carousel>
);

export const Default = Template.bind({});
Default.args = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    rtl: false,
    focusOnSelect: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
    CustomPrevArrow: <Icon color="#919EAB" icon="angle-left" size="sm" />,
    CustomNextArrow: <Icon color="#919EAB" icon="angle-right" size="sm" />,
};
