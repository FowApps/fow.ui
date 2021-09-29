import React from 'react';
import Form from 'rc-field-form';
import { FieldProps } from 'rc-field-form/lib/Field';

import Space from '../Space';
import Overline from '../Typography/Overline';

import { Label } from './styles';

type RcFieldProps<Values = any> = Omit<FieldProps<Values>, 'children'>;

export interface FormFieldProps<Values = any> extends RcFieldProps<Values> {
    children: React.ReactElement<
        any,
        string | React.JSXElementConstructor<any>
    >;
    id?: string;
    required?: boolean;
    hidden?: boolean;
    initialValue?: any;
    label?: string;
    /** Auto passed by List render props. User should not use this. */
    fieldKey?: React.Key | React.Key[];
}

const { Field } = Form;

function FormField({ label, children, ...restProps }: FormFieldProps) {
    return (
        <Field {...restProps}>
            {(control, meta) => (
                <div>
                    {label && (
                        <Label
                            required={restProps?.rules?.some(
                                // @ts-ignore
                                (rule) => rule?.required === true,
                            )}
                            hasValidationError={meta.errors.length > 0}>
                            {label}
                        </Label>
                    )}
                    <div>
                        {React.cloneElement(children, {
                            hasValidationError: meta.errors.length > 0,
                            ...control,
                        })}
                    </div>
                    <Space inline={false} justify="flex-end">
                        <Overline color="error">{meta.errors[0]}</Overline>
                    </Space>
                </div>
            )}
        </Field>
    );
}

FormField.displayName = 'FormField';

export default FormField;