import React, { useCallback } from 'react';
import { Story, Meta } from '@storybook/react';
import Form from 'rc-field-form';

import Drawer, { DrawerProps } from './Drawer';
import FormField from '../../atoms/Form/FormField';

import Button from '../../atoms/Button';
import Space from '../../atoms/Space';

import useDrawer from '../../../hooks/useDrawer';
import useDrawerForm from '../../../hooks/useDrawerForm';

import Input from '../../atoms/Input';
import Select from '../../atoms/Select';

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
    const { drawerProps, open, close } = useDrawer({
        defaultOpen: false,
    });

    return (
        <div>
            <Button onClick={open}>Open Drawer</Button>
            <Drawer
                {...drawerProps}
                title="useDrawer Hook"
                onOk={() => {
                    alert('ok');
                }}
                onCancel={() => {
                    alert('cancel');
                }}
                footer={
                    <Space>
                        <Button size="small" onClick={close}>
                            Extra Close Button
                        </Button>
                    </Space>
                }>
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

const DrawerFormTemplate: Story = () => {
    const [form] = Form.useForm();
    const {
        drawerProps,
        formProps,
        open,
        formLoading,
        formValues,
        formResult,
        form: formInstance,
    } = useDrawerForm({
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
        form,
    });

    const load = useCallback(async () => {
        const response = await fetch('https://reqres.in/api/users');
        const json = await response.json();
        return json.data.map((item) => ({
            value: item.id,
            text: item.first_name,
        }));
    }, []);

    return (
        <div>
            <Drawer
                {...drawerProps}
                title="User Form"
                footer={
                    <Button
                        color="error"
                        variant="outlined"
                        onClick={() => formInstance.resetFields()}>
                        Reset
                    </Button>
                }>
                <Form {...formProps}>
                    <FormField
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Required..' }]}>
                        <Input placeholder="Username" suffixIcon="user" />
                    </FormField>
                    <FormField
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Required..' }]}>
                        <Input placeholder="Email" suffixIcon="envelope" />
                    </FormField>
                    <FormField
                        label="Select"
                        name="select"
                        rules={[{ required: true, message: 'Required..' }]}>
                        <Select loadOptions={load} />
                    </FormField>
                </Form>
            </Drawer>
            <Button onClick={open}>Open Drawer Form</Button>
        </div>
    );
};

export const DrawerForm = DrawerFormTemplate.bind({});
DrawerForm.args = {};
