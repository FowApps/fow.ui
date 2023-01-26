import React from 'react';
import { Story, Meta } from '@storybook/react';
import Upload, { UploadProps } from './Upload';

export default {
    title: 'Molecules/Upload',
    component: Upload,
    argTypes: {
        type: {
            control: {
                type: 'radio',
            },
            options: ['dragger', 'button'],
        },
    },
} as Meta;

const updateUploadedFiles = (files: any) => console.log(files);

const Template: Story<UploadProps> = (args) => <Upload {...args} />;

export const Default = Template.bind({});
Default.args = {
    onChange: updateUploadedFiles,
    multiple: false,
    disabled: false,
    type: 'dragger',
    uploadButtonText: 'Upload',
};
