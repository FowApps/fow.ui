import React from 'react';
import { Story, Meta } from '@storybook/react';

import PriceInput, { PriceInputProps } from './PriceInput';

export default {
    title: 'Atoms/PriceInput',
    component: PriceInput,
} as Meta;

const Template: Story<PriceInputProps> = (args) => <PriceInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    onChange: (val) => console.log(val),
    currencies: [
        {
            name: 'TRY',
            value: '1',
        },
        {
            name: 'USD',
            value: '2',
        },
    ],
};
