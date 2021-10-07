import React from 'react';
import { Story, Meta } from '@storybook/react';
import Form from 'rc-field-form';
import FormField from './FormField';

import Row from '../Row';
import Col from '../Col';

import Input from '../Input';
import Switch from '../Switch';
import Upload from '../../molecules/Upload';

export default {
    title: 'Atoms/Form',
} as Meta;

const Template: Story = () => {
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log(values);
    };
    return (
        <div>
            <Form onFinish={onFinish} form={form}>
                <Row>
                    <Col xs={6}>
                        <FormField
                            name="name"
                            label="Name"
                            rules={[
                                { required: true, message: 'Zorunlu alan' },
                            ]}>
                            <Input placeholder="Name" />
                        </FormField>
                    </Col>
                    <Col xs={6}>
                        <FormField
                            name="sname"
                            label="Surname"
                            rules={[
                                { required: true, message: 'Zorunlu alan' },
                            ]}>
                            <Input placeholder="sname" />
                        </FormField>
                    </Col>
                    <Col xs={6}>
                        <FormField
                            valuePropName="checked"
                            name="sw"
                            label="Switch">
                            <Switch />
                        </FormField>
                    </Col>
                    <Col xs={12}>
                        <FormField
                            name="file"
                            label="File"
                            valuePropName="files">
                            <Upload multiple={false} accept=".zip" />
                        </FormField>
                    </Col>
                </Row>
            </Form>
            <button
                onClick={() => {
                    form.submit();
                }}
                type="submit">
                Submit
            </button>
            <button
                onClick={() => {
                    form.resetFields();
                }}
                type="reset">
                Reset
            </button>
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {};
