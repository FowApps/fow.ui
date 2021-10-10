import React from 'react';
import { Story, Meta } from '@storybook/react';
import Confirm, { ConfirmProps } from './Confirm';
import useConfirm from '../../../hooks/useConfirm/useConfirm';
import Button from '../../atoms/Button';

export default {
    title: 'Molecules/Confirm',
    component: Confirm,
    argTypes: {
        type: {
            control: {
                type: 'select',
            },
            options: ['success', 'error', 'warning', 'info'],
        },
    },
} as Meta;

const Template: Story<ConfirmProps> = (args) => <Confirm {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Heading',
    description: 'Lorem ipsum dolor sit amed',
    cancelable: false,
    okButtonProps: {
        color: 'error',
    },
    type: 'success',
    close: () => console.log('closed'),
};

const UsageTemplate: Story<ConfirmProps> = (args) => {
    const { confirm } = useConfirm();
    const onConfirm = () => {
        confirm({
            cancelable: true,
            type: 'error',
            title: 'Are you sure?',
            description:
                "There's no way of avoiding declaring the interface and the runtime values, because TS's types disappear at runtime, so you're only left with the runtime values. You can't generate one from the other.",
            okButtonProps: { children: 'Submit' },
            onOk: async () => {
                await new Promise((r) => setTimeout(r, 3000));
                alert('confirmed');
            },
            onCancel: async () => {
                alert('closed');
            },
        });
    };
    return <Button onClick={onConfirm}>Are You Sure?</Button>;
};

export const Usage = UsageTemplate.bind({});
