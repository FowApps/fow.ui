import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Form from 'rc-field-form';

import Stepper, { StepperProps } from './Stepper';
import useStepForm from '../../../hooks/useStepForm/useStepFrom';
import FormField from '../../atoms/Form/FormField';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

export default {
    title: 'Molecules/Stepper',
    component: Stepper,
} as Meta;

const Template: Story<StepperProps> = (args) => {
    const {
        form,
        current,
        gotoStep,
        stepsProps,
        formProps,
        submit,
        formLoading,
    } = useStepForm({
        initialValues: {
            username: 'Görkem',
            emain: 'test@gmail.com',
            classname: '22',
        },
        async submit(values) {
            const { username, email, school, classname } = values;
            console.log(username, email, school, classname);
            await new Promise((r) => setTimeout(r, 1000));
            return 'oks';
        },
        total: 3,
    });

    const formList = [
        <>
            <FormField label="username" name="username">
                <Input placeholder="Username" />
            </FormField>
            <FormField label="Email" name="email">
                <Input placeholder="Email" />
            </FormField>
        </>,
        <>
            <FormField label="Address" name="address">
                <Input placeholder="Address" />
            </FormField>
        </>,
        <>
            <FormField label="School" name="school">
                <Input placeholder="School" />
            </FormField>
        </>,
    ];

    return (
        <div>
            <Stepper {...stepsProps}>
                <Stepper.Step title="Hedef Bilgisi" />
                <Stepper.Step title="Yetkili" />
                <Stepper.Step title="Periyot" />
            </Stepper>
            <Form {...formProps} style={{ maxWidth: 600 }}>
                {formList[current]}
                <Button type="button" onClick={() => gotoStep(current - 1)}>
                    Prev
                </Button>
                <Button type="button" onClick={() => gotoStep(current + 1)}>
                    Next
                </Button>

                <Button
                    style={{ marginRight: 10 }}
                    color="primary"
                    loading={formLoading}
                    onClick={() => {
                        submit();
                    }}
                    type="button">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {};
