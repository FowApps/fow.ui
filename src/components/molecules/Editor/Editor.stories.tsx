import React from 'react';
import { Story, Meta } from '@storybook/react';
import Editor from './Editor';

export default {
    title: 'Molecules/Editor',
    component: Editor,
} as Meta;

const Template: Story = (args) => {
    return (
        <div>
            <Editor {...args} />
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    onChange: (content: string) => console.log(content),
    customControls: [
        'italic',
        'bold',
        'underline',
        'strikethroughstrike-through',
        'list-ul',
        'list-ol',
    ],
    extraControls: [
        {
            key: 'insert-field',
            type: 'dropdown',
            text: 'PredifinedFields',
            action: 'insert',
            options: [
                {
                    label: 'Name',
                    value: '{{name}}',
                },
                {
                    label: 'Phone',
                    value: '{{phone}}',
                },
            ],
        },
        {
            key: 'insert-button',
            type: 'button',
            text: 'Page Break',
            action: 'insert',
            value: `{{PageBreak}}`,
        },
    ],
};
