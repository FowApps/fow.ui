import React from 'react';
import { Story, Meta } from '@storybook/react';
import Form from 'rc-field-form';
import FormField from './FormField';

import Row from '../Row';
import Col from '../Col';

import Input from '../Input';

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
                </Row>
            </Form>
            <button
                onClick={() => {
                    form.submit();
                }}
                type="submit">
                Submit
            </button>
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {};
