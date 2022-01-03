import React from 'react';
import { Story, Meta } from '@storybook/react';
import Form from 'rc-field-form';
import FormField from './FormField';

import Row from '../Row';
import Col from '../Col';
import Loader from '../Loader';

import Input from '../Input';
import Switch from '../Switch';
import Upload from '../../molecules/Upload';
import useForm from '../../../hooks/useForm';

import Button from '../Button';
import Space from '../Space';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import Select from '../Select';
import LabelInput from '../../molecules/LabelInput';
import DatePicker from '../../molecules/DatePicker/DatePicker';
import DateRangePicker from '../../molecules/DateRangePicker';

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
                    <Col xs={12}>
                        <FormField
                            name="labels"
                            label="Labels"
                            rules={[
                                { required: true, message: 'Zorunlu alan' },
                            ]}>
                            <LabelInput />
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

const UseFormTemplate: Story = () => {
    const [form] = Form.useForm();
    const {
        formProps,
        formValues,
        formResult,
        formLoading,
        defaultFormValuesLoading,
    } = useForm({
        form,
        async submit(values) {
            console.log('submit', values);
            await new Promise((r) => setTimeout(r, 1000));
            console.log('fewfew', values);
            return 'ok'; // formResult
        },
        async initialValues() {
            await new Promise((r) => setTimeout(r, 3000));
            return {
                hook: 'Fow UI Form Hook',
                date: new Date().toISOString(),
                daterange: [new Date(new Date().setDate(22)).toISOString(), new Date().toISOString()]
            };
        },
    });

    const formatOptionLabel = (option) => {
        return <div>{option.name}</div>;
    };

    const options = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
    ];

    return (
        <Loader isLoading={defaultFormValuesLoading || formLoading}>
            <Form {...formProps}>
                <FormField
                    label="Hook Name"
                    name="hook"
                    rules={[{ required: true, message: 'Required..' }]}>
                    <Input placeholder="Hook Name" />
                </FormField>
                <FormField valuePropName="checked" label="Hooks" name="hookies">
                    <Checkbox.Group direction="vertical">
                        <Checkbox value="Test" label="Test" checked />
                        <Checkbox value="Test 2" label="Test 2" />
                    </Checkbox.Group>
                </FormField>
                <FormField label="Select One" name="hookiesbookie">
                    <Radio.Group direction="vertical">
                        <Radio value="Test" label="Test" checked />
                        <Radio value="Test 2" label="Test 2" />
                    </Radio.Group>
                </FormField>
                <FormField
                    label="Hooks"
                    name="hooks"
                    rules={[{ required: true, message: 'Required..' }]}>
                    <Select>
                        <Select.Option value="Test">Test</Select.Option>
                    </Select>
                </FormField>
                <FormField
                    label="Date"
                    name="date"
                    rules={[{ required: true, message: 'Required..' }]}>
                    <DatePicker />
                </FormField>
                <FormField
                    label="Date Range"
                    name="daterange"
                    rules={[{ required: true, message: 'Required..' }]}>
                    <DateRangePicker />
                </FormField>
                <Space>
                    <Button
                        type="button"
                        onClick={() => {
                            form.resetFields();
                        }}>
                        Reset
                    </Button>
                    <Button type="submit">Submit</Button>
                </Space>
            </Form>
        </Loader>
    );
};

export const UseForm = UseFormTemplate.bind({});
UseForm.args = {};
