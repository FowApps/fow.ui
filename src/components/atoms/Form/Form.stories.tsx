import React, { lazy, useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Form from 'rc-field-form';

import FormField from './FormField';
import { FormConfig } from './FormBuilderConfig';

import Row from '../Row';
import Col from '../Col';
import Loader from '../Loader';

import Input from '../Input';
import Switch from '../Switch';
import Upload from '../../molecules/Upload';
import useForm from '../../../hooks/useForm';
import Textarea from '../TextArea/Textarea';
import EmailInput from '../EmailInput/EmailInput';

import Button from '../Button';
import Space from '../Space';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import Select from '../Select';
import LabelInput from '../../molecules/LabelInput';
import DatePicker from '../../molecules/DatePicker/DatePicker';
import SelectV2 from '../../molecules/SelectV2/SelectV2';
import DateRangePicker from '../../molecules/DateRangePicker';
import PriceInput from '../PriceInput';
import Editor from '../../molecules/Editor/Editor';
import FormBuilder from './FormBuilder';
import URLInput from '../URLInput/URLInput';
import PhoneInput from '../PhoneInput';

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
                            preserve
                            hint="Please type your fullname"
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'Invalid Address',
                                },
                            ]}>
                            <EmailInput />
                        </FormField>
                    </Col>
                    <Col xs={6}>
                        <FormField
                            preserve
                            hint="Please type your fullname"
                            name="url"
                            label="Website"
                            rules={[
                                {
                                    type: 'url',
                                    message: 'Invalid Address',
                                },
                            ]}>
                            <URLInput />
                        </FormField>
                    </Col>
                    <Col xs={6}>
                        <FormField
                            preserve
                            hint="Please type your fullname"
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
    const options = [
        {
            value: 1,
            text: 'Option 1',
        },
        {
            value: 2,
            text: 'Option 2',
        },
        {
            value: 3,
            text: 'Option 3',
        },
    ];
    const [form] = Form.useForm();
    const { formProps, formLoading, defaultFormValuesLoading } = useForm({
        form,
        async submit(values) {
            console.log('submit', values);
            await new Promise((r) => setTimeout(r, 1000));
            console.log('fewfew', values);
            return 'ok'; // formResult
        },
        async initialValues() {
            return {
                finalAmount: {
                    currency: '2',
                    number: 23,
                },
                singleSelect: options[0],
                multiSelect: [options[0], options[1]],
                emailInput: 'test@ex.com',
                hook: 'Fow UI Form Hook',
                URLInput: 'https://www.test.com',
                date: new Date().toISOString(),
                description: '<p>Description</p>',
                textarea: 'Default Value',
                daterange: [
                    new Date(new Date().setDate(22)).toISOString(),
                    new Date().toISOString(),
                ],
            };
        },
    });

    return (
        <Loader isLoading={defaultFormValuesLoading || formLoading}>
            <Form {...formProps}>
                <FormField
                    label="Hook Name"
                    name="hook"
                    rules={[{ required: true, message: 'Required..' }]}>
                    <Input placeholder="Hook Name" />
                </FormField>
                <FormField
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: 'Required..' }]}>
                    <PhoneInput />
                </FormField>
                <FormField
                    label="URL Input"
                    name="URLInput"
                    rules={[
                        { required: true, message: 'Required..' },
                        {
                            type: 'url',
                            message: 'invalid url',
                        },
                    ]}>
                    <URLInput />
                </FormField>
                <FormField
                    label="Email Input"
                    name="emailInput"
                    rules={[
                        { required: true, message: 'Required..' },
                        {
                            type: 'email',
                            message: 'invalid email',
                        },
                    ]}>
                    <EmailInput />
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
                    label="Final Amount"
                    name="finalAmount"
                    rules={[{ required: true, message: 'Required..' }]}>
                    <PriceInput
                        inputProps={{
                            placeholder: 'Currency',
                        }}
                        currencies={[
                            {
                                name: 'TRY',
                                value: '1',
                            },
                            {
                                name: 'USD',
                                value: '2',
                            },
                        ]}
                    />
                </FormField>
                <FormField
                    label="Hooks"
                    name="hooks"
                    rules={[{ required: true, message: 'Required..' }]}>
                    <Select
                        placeholder="Hooks"
                        mode="tags"
                        onChange={(value, option) =>
                            console.log(value, option)
                        }>
                        <Select.Option value="Test">Test</Select.Option>
                        <Select.Option value="Test2">Test 2</Select.Option>
                    </Select>
                </FormField>
                <FormField label="Date" name="date">
                    <DatePicker placeholder="Start Date" />
                </FormField>
                <FormField label="Date Range" name="daterange">
                    <DateRangePicker />
                </FormField>
                <FormField
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Required..' }]}>
                    <Editor id="description" />
                </FormField>
                <FormField
                    label="Summary"
                    name="summary"
                    rules={[{ required: true, message: 'Required..' }]}>
                    <Editor id="summary" placeholder="Summary" />
                </FormField>
                <FormField
                    label="Textarea"
                    name="textarea"
                    rules={[{ required: true, message: 'Required..' }]}>
                    <Textarea />
                </FormField>
                <FormField
                    label="Single Select"
                    name="singleSelect"
                    rules={[{ required: true, message: 'Required..' }]}>
                    <SelectV2 options={options} />
                </FormField>
                <FormField
                    label="Multi Select"
                    name="multiSelect"
                    rules={[{ required: true, message: 'Required..' }]}>
                    <SelectV2.Multiple options={options} />
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

FormConfig.fields.addField([
    {
        type: 'custom-label',
        field: LabelInput,
    },
]);

const FormBuilderTemplate: Story = () => {
    const [formInstance] = Form.useForm();
    const [onlyMandatory, setOnlyMandatory] = useState(false);
    const builderConfig = {
        name: 'test',
        id: 'storyform',
        fields: [
            {
                key: 'phone',
                name: 'phone',
                label: 'Phone',
                required: true,
                type: 'phone',
                hint: 'Hello Africa',
            },
            {
                key: 'firstName',
                name: 'firstName',
                label: 'First Name',
                required: true,
                type: 'text',
                hint: 'Hello Africa',
            },
            {
                key: 'start-date-time',
                name: 'startDateTime',
                label: 'Start Date and Time',
                required: true,
                type: 'date-time',
                hint: 'Hello Africa',
            },
            {
                key: 'description',
                name: 'description',
                label: 'Description',
                required: true,
                type: 'textarea',
                hint: 'Hello Africa',
            },
            {
                key: 'email',
                name: 'email',
                label: 'Email',
                required: true,
                type: 'email',
                hint: 'Hello Africa',
            },

            {
                key: 'end-date-time-range',
                name: 'endDateTime',
                label: 'Start/End Date and Time',
                required: true,
                type: 'date-time-range',
                hint: 'Hello Africa',
            },
            {
                key: 'start-date',
                name: 'startDate',
                label: 'Start Date',
                required: true,
                type: 'date',
                hint: 'Hello Africa',
            },
            {
                key: 'end-date',
                name: 'endDate',
                label: 'End Date',
                required: true,
                type: 'date-range',
                hint: 'Hello Africa',
            },
            {
                key: 'website',
                name: 'website',
                label: 'Website',
                required: true,
                type: 'url',
                hint: 'Hello Africa',
            },
            {
                key: 'count',
                name: 'count',
                label: 'Count',
                required: false,
                type: 'number',
                hint: 'Hello Africa',
            },
            {
                key: 'collection',
                name: 'collection',
                label: 'Collection',
                required: false,
                type: 'multiple-select',
                options: [
                    {
                        label: 'Adidas',
                        value: 2,
                    },
                    {
                        label: 'Nike',
                        value: 3,
                    },
                ],
            },
            {
                key: 'gender',
                name: 'gender',
                label: 'Gender',
                required: false,
                type: 'single-select',
                options: [
                    {
                        label: 'Male',
                        value: 'male',
                    },
                    {
                        label: 'Female',
                        value: 'female',
                    },
                ],
            },

            {
                key: 'include-tax',
                name: 'includeTax',
                label: 'Include Tax',
                required: false,
                type: 'checkbox',
                hint: 'Hello Africa',
            },
            {
                key: 'select-items',
                name: 'selectedItemIds',
                label: 'Select Items',
                required: false,
                type: 'checkbox-group',
                options: [
                    {
                        label: 'Lorem',
                        value: 1,
                    },
                    {
                        label: 'Ipsum',
                        value: 2,
                    },
                    {
                        label: 'Dolor',
                        value: 3,
                    },
                ],
            },
            {
                key: 'select-one-items',
                name: 'selectedItemId',
                label: 'Select One Item',
                required: false,
                type: 'radio-group',
                options: [
                    {
                        label: 'Male',
                        value: '1',
                    },
                    {
                        label: 'Female',
                        value: '2',
                    },
                ],
            },
            {
                key: 'template',
                name: 'template',
                label: 'Template',
                required: true,
                type: 'rich-textarea',
                hint: 'Hello Africa',
            },
        ],
    };

    const handleSubmit = (values) => {
        console.log(values);
    };

    const handleSaveClick = () => {
        formInstance.submit();
    };

    const handleResetClick = () => {
        formInstance.resetFields();
    };

    return (
        <div>
            <Button
                onClick={() => {
                    setOnlyMandatory(!onlyMandatory);
                }}>
                Toggle
            </Button>
            <FormBuilder
                showOnlyMandatory={onlyMandatory}
                initialValues={{
                    firstName: 'Görkem',
                    selectedItemIds: [3, 2],
                    email: 'grkm@test.com',
                    count: 12,
                    includeTax: true,
                    description: 'Lorem',
                    website: 'https://www.google.com',
                    template: '<p><strong>Hello Africa</strong></p>',
                    selectedItemId: '2',
                }}
                config={builderConfig}
                formInstance={formInstance}
                onSubmit={handleSubmit}
            />
            <Space>
                <Button onClick={handleSaveClick}>Save</Button>
                <Button onClick={handleResetClick}>Reset</Button>
            </Space>
        </div>
    );
};

export const Builder = FormBuilderTemplate.bind({});
Builder.args = {};
