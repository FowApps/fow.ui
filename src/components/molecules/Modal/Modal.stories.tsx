import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import useModal from '../../../hooks/useModal/';
import useModalForm from '../../../hooks/useModalForm';

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
    const { isOpen, open, close } = useModal();

    const {
        formProps,
        formLoading,
        formValues,
        formResult,
        form: formInstance,
    } = useModalForm({
        defaultOpen: false,
        autoSubmitClose: true,
        autoResetForm: true,
        initialValues: async () => {
            await new Promise((r) => setTimeout(r, 3000));
            return {
                select: 1,
            };
        },
        async submit({ username, email }) {
            console.log('beforeSubmit');
            await new Promise((r) => setTimeout(r, 1000));
            console.log('afterSubmit', { username, email });
            return 'ok';
        },
    });

    return (
        <>
            <br />
            <br />
            <Button
                type="button"
                style={{
                    marginLeft: '400px',
                    width: '400px',
                    height: '140px',
                }}
                onClick={open}>
                Modal Aç
            </Button>
            <Modal {...args} visible={isOpen} onClose={() => close()}>
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
