import React, { useState } from 'react';
import Form from 'rc-field-form';
import { FieldProps } from 'rc-field-form/lib/Field';

import Space from '../Space';
import Overline from '../Typography/Overline';

import { Label, Wrapper, Text } from './styles';
import Tooltip from '../Tooltip';
import Icon from '../Icon';
import Button, { ButtonProps } from '../Button';

type RcFieldProps<Values = any> = Omit<FieldProps<Values>, 'children'>;

export interface FormFieldProps<Values = any> extends RcFieldProps<Values> {
    children: React.ReactElement<
        any,
        string | React.JSXElementConstructor<any>
    >;
    /**
     * form name
     */
    id?: string;
    /**
     * required
     */
    required?: boolean;
    /**
     * hidden
     */
    hidden?: boolean;
    /**
     * initial value
     */
    initialValue?: any;
    /**
     * form label
     */
    label?: string;
    /**
     * short description about field
     */
    hint?: React.ReactNode;
    /** Auto passed by List render props. User should not use this. */
    fieldKey?: React.Key | React.Key[];
    type?: string;
    initialVisibleField?: boolean;
    triggerButtonProps?: ButtonProps;
    triggerButtonText?: string;
}

const { Field } = Form;

function FormField({
    label,
    hidden,
    hint,
    initialVisibleField = true,
    triggerButtonProps = {},
    triggerButtonText = '',
    dependencies = [],
    children,
    ...restProps
}: FormFieldProps) {
    const [isVisibleField, setIsVisibleField] = useState(initialVisibleField);

    const handleVisibleField = () => {
        setIsVisibleField(true);
    };

    return (
        <Field dependencies={dependencies} {...restProps}>
            {(control, meta, form) => (
                <>
                    {isVisibleField || control.value ? (
                        <Wrapper hidden={hidden}>
                            {label && (
                                <Label>
                                    <Space size="xsmall">
                                        <Text
                                            required={restProps?.rules?.some(
                                                (rule) =>
                                                    // @ts-ignore
                                                    rule?.required === true,
                                            )}
                                            hasValidationError={
                                                meta.errors.length > 0
                                            }>
                                            {label}
                                        </Text>
                                        {hint && (
                                            <Tooltip overlay={hint}>
                                                <Icon
                                                    icon={[
                                                        'far',
                                                        'question-circle',
                                                    ]}
                                                />
                                            </Tooltip>
                                        )}
                                    </Space>
                                </Label>
                            )}
                            <div>
                                {React.cloneElement(children, {
                                    hasValidationError: meta.errors.length > 0,
                                    name: restProps.name,
                                    ...control,
                                    form,
                                    dependencies,
                                    onChange: (...args: any) => {
                                        control?.onChange(...args);
                                        children.props?.onChange?.(...args);
                                        if (!isVisibleField) {
                                            setIsVisibleField(true);
                                        }
                                    },
                                })}
                            </div>
                            <Space inline={false} justify="flex-end">
                                <Overline color="error">
                                    {meta.errors[0]}
                                </Overline>
                            </Space>
                        </Wrapper>
                    ) : (
                        <div>
                            <Text
                                required={restProps?.rules?.some(
                                    (rule) =>
                                        // @ts-ignore
                                        rule?.required === true,
                                )}
                                hasValidationError={meta.errors.length > 0}>
                                <Button
                                    style={{ padding: 0 }}
                                    color={
                                        meta.errors.length > 0
                                            ? 'error'
                                            : 'success'
                                    }
                                    variant="text"
                                    {...triggerButtonProps}
                                    onClick={handleVisibleField}>
                                    {triggerButtonText || label}
                                </Button>
                            </Text>
                        </div>
                    )}
                </>
            )}
        </Field>
    );
}

FormField.displayName = 'FormField';

export default FormField;
