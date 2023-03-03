import React, { useCallback, useContext, useMemo } from 'react';
import Form, { useForm, FormInstance } from 'rc-field-form';
import { Rule } from 'rc-field-form/lib/interface';

import { FormConfig } from './FormBuilderConfig';
import Row from '../Row';
import Col from '../Col';
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
    hidden?: boolean;
    dependencies?: string[];
};

type Config = {
    fields: Field[];
    name?: string;
    id?: string;
    currencyList?: Currency[];
    baseCurrency?: string;
    disabledAutoFocused?: boolean;
    disabledFluid?: false;
};

type Currency = {
    /**
     * value of currency
     */
    value: string;
    /**
     * name of currency
     */
    name: string;
};

export interface FormBuilderProps {
    initialValues?: any;
    formInstance?: FormInstance;
    onSubmit: (values: any) => void;
    config: Config;
    showOnlyMandatory?: boolean;
    onValuesChange?: (value: any, values: any) => void;
    wrapWithForm?: boolean;
}

const FormBuilder = ({
    initialValues,
    formInstance,
    onSubmit,
    showOnlyMandatory = false,
    onValuesChange,
    config = {
        fields: [],
        name: undefined,
        id: undefined,
        currencyList: [],
        baseCurrency: undefined,
        disabledAutoFocused: false,
        disabledFluid: false,
    },
    wrapWithForm = true,
}: FormBuilderProps) => {
    const [formRef] = useForm(formInstance);
    const { language } = useContext(ConfigContext);

    const formId = useMemo(() => uuidv4(), []);

    const getPlaceholderProp = useCallback(
        (field) => {
            if (field.placeholder) return field.placeholder;
            if (
                field.type === 'single-select' ||
                field.type === 'multiple-select'
            )
                return [localization[language].select];
            if (field.type === 'date-time' || field.type === 'date')
                return [localization[language].pickDate];
            if (field.type === 'date-time-range' || field.type === 'date-range')
                return [
                    localization[language].startDate,
                    localization[language].endDate,
                ];
            return field.label || '';
        },
        [language],
    );

    const getValueProp = useCallback((field: Field) => {
        if (field.valueProp) return field.valueProp;
        if (field.type === 'checkbox' || field.type === 'checkbox-group')
            return 'checked';
        return 'value';
    }, []);

    const getinitialVisibleFieldProp = useCallback((field: Field) => {
        if (typeof field.initialVisibleField === 'boolean')
            return field.initialVisibleField;
        if (field.type === 'rich-textarea') return false;
        return true;
    }, []);

    // const getLabelProp = (field) =>
    // if (field.type === 'checkbox') return null;
    // field.label;
    const calculatedProps = useCallback(
        (field: Field) => {
            switch (field.type) {
                case 'price':
                    return {
                        ...field.props,
                        setFormFieldValue: (value: string) => {
                            formRef.setFieldsValue({
                                currencyId: value,
                            });
                        },
                        initialValue: {
                            number: initialValues?.[field.name],
                            currency: initialValues?.currencyId,
                        },
                        currencies: config.currencyList,
                        baseCurrency: config.baseCurrency,
                    };
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
                        allowSearch: true,
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
                        allowSearch: true,
                        options: field?.options?.map((item) => ({
                            label: item.label,
                            value: item.value,
                        })),
                        ...field.props,
                    };
                case 'date':
                case 'date-time':
                case 'date-range':
                    return {
                        showTime: false,
                        ...(field.required === false
                            ? {
                                  defaultValue: false,
                              }
                            : {}),
                        ...field.props,
                    };

                default:
                    return { ...field.props };
            }
        },
        [config.currencyList, initialValues],
    );

    let focused = false;
    const renderField = useCallback(
        (field: Field) => {
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
                <Col
                    xs={
                        // eslint-disable-next-line no-nested-ternary
                        !config?.disabledFluid
                            ? field.props?.fluid
                                ? 12
                                : 6
                            : field?.props?.columnSize || 12
                    }
                    style={{
                        display: field.hidden ? 'none' : 'block',
                    }}>
                    <FormField
                        key={field.key}
                        valuePropName={getValueProp(field)}
                        type={field.type}
                        name={field.name}
                        label={field.label}
                        hidden={field.hidden}
                        rules={[
                            {
                                required: field.required,
                                message:
                                    field.requiredMessage ||
                                    'This field is required',
                            },
                            ...predefineFieldRules,
                            ...(field.rules ? field.rules : []),
                        ]}
                        hint={field.hint}
                        initialVisibleField={getinitialVisibleFieldProp(field)}
                        dependencies={field.dependencies}>
                        <FieldComponent
                            key={field.key}
                            placeholder={getPlaceholderProp(field)}
                            inputProps={{
                                placeholder: getPlaceholderProp(field),
                            }}
                            ref={(ref: any) => {
                                if (
                                    ref &&
                                    !ref.value &&
                                    !focused &&
                                    !config?.disabledAutoFocused
                                ) {
                                    focused = true;
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
                </Col>
            );
        },
        [config, initialValues],
    );

    const fields = useMemo(() => {
        if (showOnlyMandatory) {
            return config.fields
                .filter((field) => field.required)
                .map((field) => renderField(field));
        }
        return config.fields.map((field) => renderField(field));
    }, [config.fields, renderField, showOnlyMandatory]);

    return (
        <div>
            {wrapWithForm ? (
                <Form
                    id={config.id || formId}
                    name={config.name}
                    form={formRef}
                    onValuesChange={onValuesChange}
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
                    <Row>{fields}</Row>
                </Form>
            ) : (
                <Row>{fields}</Row>
            )}
        </div>
    );
};

export default FormBuilder;
