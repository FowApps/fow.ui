import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Editor from './Editor';
import Select from '../../atoms/Select';

export default {
    title: 'Molecules/Editor',
    component: Editor,
} as Meta;

const Template: Story = (args) => {
    const fieldSelect = {
        type: 'select',
        placeholder: 'Please Select',
        options: [
            {
                label: 'Test',
                value: 'Test',
            },
            {
                label: 'Test 1',
                value: 'Test 1',
            },
        ],
    };
    return (
        <div>
            <Editor {...args} customTools={[fieldSelect]} />
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    onChange: (content: string) => console.log(content),
    defaultValue: '<p>Default Value</p>',
};
