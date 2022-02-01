import React from 'react';
import { Story, Meta } from '@storybook/react';
import Editor, { CustomToolOptionType, EditorProps } from './Editor';

export default {
    title: 'Molecules/Editor',
    component: Editor,
} as Meta;

const customTools: CustomToolOptionType[] = [
    {
        type: 'select',
        options: {
            label: 'Add Field',
            options: [
                {
                    value: '{{FullName}}',
                    text: 'Full Name',
                },
                {
                    value: '{{Phone}}',
                    text: 'Phone',
                },
            ],
            action(value: string) {
                if (value) {
                    const cursorPosition = this.quill.getSelection().index;
                    this.quill.insertText(cursorPosition, value);
                    this.quill.setSelection(cursorPosition + value.length);
                }
            },
            name: 'field',
        },
    },
];

const Template: Story<EditorProps> = (args) => (
    <div>
        <Editor {...args} extraTools={customTools} />
    </div>
);

export const Default = Template.bind({});

Default.args = {
    onChange: (content: string) => console.log(content),
    defaultValue: '<p>Default Value</p>',
};
