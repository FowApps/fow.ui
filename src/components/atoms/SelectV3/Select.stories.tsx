import React, { useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Form from 'rc-field-form';

import FormField from '../Form/FormField';
import Select, { SelectProps } from './Select';
import Button from '../Button';

export default {
    title: 'Atoms/SelectV3',
    component: Select,
} as Meta;

const SingleStaticControlledTemplate: Story<SelectProps> = (args) => {
    const [value, setValue] = useState('2');

    return (
        <Select
            mode="single"
            placeholder="Please Select"
            onChange={(val) => {
                setValue(val);
            }}
            value={value}
            options={[
                {
                    value: '1',
                    label: 'Item 1',
                    hidden: false,
                },
                {
                    value: '2',
                    label: 'Item 2',
                    hidden: true,
                },
            ]}
        />
    );
};

export const SingleStaticControlled = SingleStaticControlledTemplate.bind({});
SingleStaticControlled.args = {
    placeholder: 'Please Select',
    mode: 'single',
};

const SingleControlledTemplate: Story<SelectProps> = (args) => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState('1');

    const fetchData = async (query: string = '') => {
        try {
            setIsLoading(true);

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?q=${query}`,
            );
            const json = await response.json();

            setOptions(
                json.map((item) => ({
                    value: item.id.toString(),
                    label: item.title,
                })),
            );
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Select
            {...args}
            onSearch={(query) => {
                fetchData(query);
            }}
            onChange={(val) => {
                setValue(val);
            }}
            isLoading={isLoading}
            options={options}
            value={value}
        />
    );
};

export const SingleControlled = SingleControlledTemplate.bind({});
SingleControlled.args = {
    placeholder: 'Please Select',
    mode: 'single',
};

const SingleUncontrolledTemplate: Story<SelectProps> = (args) => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const fetchData = async (query: string = '') => {
        try {
            setIsLoading(true);

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?q=${query}`,
            );
            const json = await response.json();

            setOptions(
                json.map((item) => ({
                    value: item.id.toString(),
                    label: item.title,
                })),
            );
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Select
            {...args}
            onSearch={(query) => {
                fetchData(query);
            }}
            onChange={(val) => {
                console.log(val);
            }}
            isLoading={isLoading}
            options={options}
        />
    );
};

export const SingleUncontrolled = SingleUncontrolledTemplate.bind({});
SingleUncontrolled.args = {
    placeholder: 'Please Select',
    mode: 'single',
};

const SingleWithFormTemplate: Story<SelectProps> = (args) => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);
    const [form] = Form.useForm();

    const fetchData = async (query: string = '') => {
        try {
            setIsLoading(true);

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?q=${query}`,
            );
            const json = await response.json();

            setOptions(
                json.map((item) => ({
                    value: item.id.toString(),
                    label: item.title + item.id.toString(),
                })),
            );
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Form
            form={form}
            onFinish={(values) => {
                console.log(values);
            }}>
            <Button
                onClick={() => {
                    form.setFieldsValue({ user: undefined });
                }}>
                Reset
            </Button>
            <FormField
                name="user"
                initialValue={'1'}
                rules={[
                    {
                        required: true,
                        message: 'Test',
                    },
                ]}>
                <Select
                    {...args}
                    onSearch={(query) => {
                        fetchData(query);
                    }}
                    isLoading={isLoading}
                    options={options}
                />
            </FormField>
            <Button type="submit">Submit</Button>
        </Form>
    );
};

export const SingleWithForm = SingleWithFormTemplate.bind({});
SingleWithForm.args = {
    placeholder: 'Please Select',
    mode: 'single',
};

const MultipleControlledTemplate: Story<SelectProps> = (args) => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);
    const [values, setValues] = useState(['2']);

    const fetchData = async (query: string = '') => {
        try {
            setIsLoading(true);

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?q=${query}`,
            );
            const json = await response.json();

            setOptions(
                json.map((item) => ({
                    value: item.id.toString(),
                    label: item.title + item.id.toString(),
                })),
            );
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log('Controlled State:', { values });
    }, [values]);

    return (
        <Select
            {...args}
            onSearch={(query) => {
                fetchData(query);
            }}
            onChange={(values) => {
                setValues(values);
            }}
            isLoading={isLoading}
            options={options}
            value={values}
        />
    );
};

export const MultipleControlled = MultipleControlledTemplate.bind({});
MultipleControlled.args = {
    placeholder: 'Please Select',
    mode: 'multiple',
};

const MultipleUncontrolledTemplate: Story<SelectProps> = (args) => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const fetchData = async (query: string = '') => {
        try {
            setIsLoading(true);

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?q=${query}`,
            );
            const json = await response.json();

            setOptions(
                json.map((item) => ({
                    value: item.id.toString(),
                    label: item.title + item.id.toString(),
                })),
            );
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Select
            {...args}
            onSearch={(query) => {
                fetchData(query);
            }}
            onChange={(values) => {
                console.log('Uncontrolled Values:', values);
            }}
            isLoading={isLoading}
            options={options}
            defaultValue={['1']}
        />
    );
};

export const MultipleUncontrolled = MultipleUncontrolledTemplate.bind({});
MultipleUncontrolled.args = {
    placeholder: 'Please Select',
    mode: 'multiple',
    defaultValue: ['1'],
};

const MultipleWithFormTemplate: Story<SelectProps> = (args) => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);
    const [form] = Form.useForm();

    const fetchData = async (query: string = '') => {
        try {
            setIsLoading(true);

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?q=${query}`,
            );
            const json = await response.json();

            setOptions(
                json.map((item) => ({
                    value: item.id.toString(),
                    label: item.title + item.id.toString(),
                })),
            );
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Form
            form={form}
            onFinish={(values) => {
                console.log(values);
            }}>
            <Button
                onClick={() => {
                    form.setFieldsValue({ users: undefined });
                }}>
                Reset
            </Button>
            <FormField
                name="users"
                initialValue={['1']}
                rules={[
                    {
                        required: true,
                        message: 'Test',
                    },
                ]}>
                <Select
                    {...args}
                    onSearch={(query) => {
                        fetchData(query);
                    }}
                    isLoading={isLoading}
                    options={options}
                />
            </FormField>
            <Button type="submit">Submit</Button>
        </Form>
    );
};

export const MultipleWithForm = MultipleWithFormTemplate.bind({});
MultipleWithForm.args = {
    placeholder: 'Please Select',
    mode: 'multiple',
};
