import React from 'react';
import { Story, Meta } from '@storybook/react';
import Upload, { UploadProps } from './Upload';

export default {
    title: 'Molecules/Upload',
    component: Upload,
} as Meta;

const updateUploadedFiles = (files: any) => console.log(files);

const Template: Story<UploadProps> = (args) => <Upload {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Upload Manifest File',
    onChange: updateUploadedFiles,
    multiple: false,
    disabled: true,
    localization: {
        placeholder: 'Select Files',
        description: 'Drop files here or click browse thorough your machine',
        sizeInfo: 'Maximum allowed upload file size',
        sizeError: 'File is too big.',
    },
};
