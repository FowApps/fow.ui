import React, { Suspense } from 'react';
import Form, { useForm } from 'rc-field-form';

import { FormConfig } from './FormBuilderConfig';
import Loader from '../Loader';
import FormField from './FormField';

const FormBuilder = ({
    formInstance,
    onSubmit,
    config = { fields: [], name: '' },
}) => {
    const [formRef] = useForm(formInstance);

    const renderField = (field) => {
        const fieldComponent = field.component
            ? field.component
            : FormConfig.fields.getFields()[field.type];
        if (!fieldComponent) {
            throw new Error(
                `FormBuilderError: "${field.type}" has not been added to config's field types.`,
            );
        }

        const FieldComponent = fieldComponent;

        return (
            <FormField
                name={field.name}
                label={field.label}
                rules={[
                    {
                        required: field.required,
                        message:
                            field.requiredMessage || 'This field is required',
                    },
                    ...field.rules,
                ]}
                hint={field.hint}>
                <FieldComponent
                    key={field.key}
                    placeholder={field.placeholder || field.label}
                />
            </FormField>
        );
    };

    const fields = config.fields.map((field) => renderField(field));

    return (
        <Form name={config.name} form={formRef} onFinish={onSubmit}>
            <Suspense fallback={<Loader isLoading />}>{fields}</Suspense>
        </Form>
    );
};

export default FormBuilder;
