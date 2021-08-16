import React from 'react';
import { Story, Meta } from '@storybook/react';
import Form, { FormProps } from '.';

import Row from '../Row';
import Col from '../Col';

import StaticSelect from '../Select/StaticSelect';
import AsyncSelect from '../Select/AsyncSelect';
import Checkbox from '../Checkbox';
import Input from '../Input';

export default {
    title: 'Atoms/Form',
    component: Form,
} as Meta;

const Template: Story<FormProps> = () => {
    const defaultValues = {
        car: 'volvo',
        name: 'Fow',
    };

    const fruits = [
        { value: 'lemon', label: 'Lemon' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'banana', label: 'Banana' },
    ];

    const cars = [
        { value: 'bmw', label: 'BMW' },
        { value: 'volvo', label: 'Volvo' },
        { value: 'mercedes', label: 'Mercedes' },
    ];

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Form onSubmit={onSubmit} defaultValues={defaultValues}>
            <Row>
                <Col xs={6}>
                    <Form.Field
                        label="Fruit"
                        name="fruit"
                        rules={{
                            required: {
                                value: true,
                                message: 'Required Field',
                            },
                        }}>
                        <StaticSelect
                            options={fruits}
                            isClearable
                            onChange={(e) => {
                                console.log(e);
                            }}
                        />
                    </Form.Field>
                </Col>
                <Col xs={6}>
                    <Form.Field label="Car" name="car">
                        <StaticSelect options={cars} />
                    </Form.Field>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <Form.Field
                        label="Houses"
                        name="houses"
                        rules={{
                            required: {
                                value: true,
                                message: 'Required Field',
                            },
                        }}>
                        <AsyncSelect
                            isMulti
                            isClearable
                            labelKey="name"
                            valueKey="name"
                            loadOptions={async () => {
                                const response = await fetch(
                                    `https://www.anapioficeandfire.com/api/houses?page=1&pageSize=10`,
                                );
                                const responseJSON = await response.json();

                                return responseJSON;
                            }}
                            onChange={(e) => {
                                console.log(e);
                            }}
                        />
                    </Form.Field>
                </Col>
                <Col xs={6}>
                    <Form.Field
                        label="Name"
                        name="name"
                        rules={{
                            required: {
                                value: true,
                                message: 'Required Field',
                            },
                        }}>
                        <Input placeholder="Name" prefixIcon="paper-plane"/>
                    </Form.Field>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <button type="submit">Save</button>
                </Col>
            </Row>
        </Form>
    );
};

export const Default = Template.bind({});
Default.args = {};
