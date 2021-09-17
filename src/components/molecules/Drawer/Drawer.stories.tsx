import React from 'react';
import { Story, Meta } from '@storybook/react';
import Drawer, { DrawerProps } from './Drawer';

import Button from '../../atoms/Button';
import useDisclosure from '../../../hooks/useDisclosure';
import Space from '../../atoms/Space';

export default {
    title: 'Molecules/Drawer',
    component: Drawer,
    argTypes: {
        placement: {
            control: {
                type: 'select',
            },
            options: ['right', 'top', 'left', 'bottom'],
        },
        showMask: {
            control: 'boolean',
        },
    },
} as Meta;

const Template: Story<DrawerProps> = (args) => {
    const { isOpen, toggle } = useDisclosure();
    const footerNode = (
        <Space justify="flex-end" inline={false}>
            <Button
                onClick={toggle}
                variant="outlined"
                color="error"
                size="small">
                Cancel
            </Button>
            <Button size="small">Submit</Button>
        </Space>
    );
    return (
        <div>
            <Button onClick={toggle}>Open Drawer</Button>
            <Drawer
                {...args}
                destroyOnClose
                isOpen={isOpen}
                onClose={toggle}
                footer={footerNode}>
                <div style={{ height: 1000 }}>Body of Drawer</div>
            </Drawer>
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    width: 700,
    placement: 'right',
    title: 'Title of Drawer',
};
