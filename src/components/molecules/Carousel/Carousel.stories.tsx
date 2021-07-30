import React from 'react';
import { Story, Meta } from '@storybook/react';
import Carousel, { CarouselProps } from './Carousel';

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
                src={'https://via.placeholder.com/150x100'}
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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
