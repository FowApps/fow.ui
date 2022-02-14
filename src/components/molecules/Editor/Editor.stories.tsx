import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
    defaultValue: '<p>Default Value</p>',
};
