import React, { Suspense, useContext, useMemo } from 'react';
import Form, { useForm, FormInstance } from 'rc-field-form';
import { Rule } from 'rc-field-form/lib/interface';

import { FormConfig } from './FormBuilderConfig';
import Loader from '../Loader';
import FormField from './FormField';
import { ConfigContext } from '../../../theme/FowThemeProvider';
import { tr } from './locales/tr';
import { en } from './locales/en';
import { uuidv4 } from '../../../utils/uuid';

const localization = { tr, en };

type FieldTypes =
    | 'text'
    | 'textarea'
    | 'rich-textarea'
    | 'number'
    | 'url'
    | 'checkbox'
    | 'checkbox-group'
    | 'radio-group'
    | 'single-select'
    | 'multiple-select'
    | 'time'
    | 'time-range'
    | 'date'
    | 'date-range'
    | 'date-time'
    | 'date-time-range'
    | string;

type Option = {
    value: string | number;
    label: string;
};

type Field = {
    key: string;
    name: string;
    label?: string;
    required?: boolean;
    type: FieldTypes;
    hint?: string;
    options?: Option[];
    component?: React.ReactNode;
    rules?: Rule[];
    requiredMessage?: string;
    valueProp?: 'value' | 'checked' | 'select' | string;
    initialVisibleField?: boolean;
    props?: any;
};

type Config = {
    fields: Field[];
    name?: string;
    id?: string;
};

export interface FormBuilderProps {
    initialValues?: any;
    formInstance?: FormInstance;
    onSubmit: (values: any) => void;
    config: Config;
    showOnlyMandatory?: boolean;
}

const FormBuilder = ({
    initialValues,
    formInstance,
    onSubmit,
    showOnlyMandatory = false,
    config = {
        fields: [],
        name: undefined,
        id: undefined,
    },
}: FormBuilderProps) => {
    const [formRef] = useForm(formInstance);
    const { language } = useContext(ConfigContext);

    const formId = useMemo(() => uuidv4(), []);

    const getPlaceholderProp = (field) => {
        if (field.placeholder) return field.placeholder;
        if (field.type === 'single-select' || field.type === 'multiple-select')
            return [localization[language].select];
        if (field.type === 'date-time' || field.type === 'date')
            return [localization[language].pickDate];
        if (field.type === 'date-time-range' || field.type === 'date-range')
            return [
                localization[language].startDate,
                localization[language].endDate,
            ];
        return field.label || '';
    };

    const getValueProp = (field: Field) => {
        if (field.valueProp) return field.valueProp;
        if (field.type === 'checkbox' || field.type === 'checkbox-group')
            return 'checked';
        return 'value';
    };

    const getinitialVisibleFieldProp = (field: Field) => {
        if (typeof field.initialVisibleField === 'boolean')
            return field.initialVisibleField;
        if (field.type === 'rich-textarea') return false;
        return true;
    };

    const getLabelProp = (field) => {
        if (field.type === 'checkbox') return null;
        return field.label;
    };

    const calculatedProps = (field: Field) => {
        switch (field.type) {
            case 'checkbox':
                return {
                    children: field.label,
                };
            case 'checkbox-group':
            case 'radio-group':
                return {
                    options: field?.options?.map((item) => ({
                        label: item.label,
                        value: item.value,
                    })),
                    ...field.props,
                };
            case 'single-select':
                return {
                    mode: 'single',
                    allowClear: true,
                    options: field?.options?.map((item) => ({
                        label: item.label,
                        value: item.value,
                    })),
                    ...field.props,
                };
            case 'multiple-select':
                return {
                    mode: 'multiple',
                    allowClear: true,
                    options: field?.options?.map((item) => ({
                        label: item.label,
                        value: item.value,
                    })),
                    ...field.props,
                };
            case 'date':
            case 'date-range':
                return {
                    showTime: false,
                    ...field.props,
                };

            default:
                return { ...field.props };
        }
    };

    const renderField = (field: Field, idx: number) => {
        const fieldComponent = field.component
            ? field.component
            : FormConfig.fields.getFields()[field.type]?.component;
        if (!fieldComponent) {
            throw new Error(
                `FormBuilderError: "${field.type}" has not been added to config's field types.`,
            );
        }

        const predefineFieldRules = field.rules
            ? field.rules
            : FormConfig.fields.getFields()[field.type].rules || [];

        const FieldComponent = fieldComponent;

        return (
            <FormField
                key={field.key}
                valuePropName={getValueProp(field)}
                type={field.type}
                name={field.name}
                label={getLabelProp(field)}
                rules={[
                    {
                        required: field.required,
                        message:
                            field.requiredMessage || 'This field is required',
                    },
                    ...predefineFieldRules,
                    ...(field.rules ? field.rules : []),
                ]}
                hint={field.hint}
                initialVisibleField={getinitialVisibleFieldProp(field)}>
                <FieldComponent
                    key={field.key}
                    placeholder={getPlaceholderProp(field)}
                    ref={(ref: any) => {
                        if (idx === 0 && ref) {
                            setTimeout(() => {
                                if (typeof ref.focus === 'function') {
                                    ref.focus();
                                }
                                if (typeof ref.onFocus === 'function') {
                                    ref.onFocus();
                                }
                            }, 300);
                        }
                    }}
                    {...calculatedProps(field)}
                />
            </FormField>
        );
    };

    const fields = showOnlyMandatory
        ? config.fields
              .filter((field) => field.required)
              .map((field, idx) => renderField(field, idx))
        : config.fields.map((field, idx) => renderField(field, idx));

    return (
        <div>
            <Form
                id={config.id || formId}
                name={config.name}
                form={formRef}
                onFinishFailed={({ errorFields }) => {
                    const name = errorFields[0].name[0];
                    const input = document.querySelector(
                        `*[name=${name}]`,
                    ) as HTMLElement;

                    input?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'start',
                    });

                    setTimeout(() => {
                        input?.focus();
                    }, 300);
                }}
                onFinish={onSubmit}
                initialValues={initialValues}>
                <Suspense fallback={<Loader isLoading />}>{fields}</Suspense>
            </Form>
        </div>
    );
};

export default FormBuilder;
