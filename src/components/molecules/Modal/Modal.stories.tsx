import React from 'react';
import { Story, Meta } from '@storybook/react';

import Modal, { ModalProps } from './Modal';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import useModal from '../../../hooks/useModal/';

export default {
    title: 'Molecules/Modal',
    component: Modal,
    argTypes: {
        type: {
            control: {
                type: 'select',
            },
            options: ['success', 'error', 'warning', 'info'],
        },
    },
} as Meta;

const Template: Story<ModalProps> = (args) => {
    const { open, close, isOpen } = useModal();

    return (
        <>
            <Button type="button" onClick={open}>
                Modal Aç
            </Button>
            <Modal visible={isOpen} onClose={() => close()}>
                <Input />
            </Modal>
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    title: 'Test Header',
    children: <Input type="text" />,
};
