import React from 'react';
import { Story, Meta } from '@storybook/react';
import EditorV2, { defaultToolbarItems } from './EditorV2';

export default {
    title: 'Molecules/EditorV2',
    component: EditorV2,
} as Meta;

const Template: Story = (args) => {
    return (
        <div>
            <EditorV2
                value={''}
                onChange={(value: string) => console.log(value)}
                toolbarItems={[]}
                {...args}
            />
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    value: '',
    onChange: (value: string) => console.log(value),
    toolbarItems: defaultToolbarItems,
};
