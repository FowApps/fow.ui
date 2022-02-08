import React from 'react';
import Form from 'rc-field-form';
import { FieldProps } from 'rc-field-form/lib/Field';

import Space from '../Space';
import Overline from '../Typography/Overline';

import { Label, Wrapper } from './styles';

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
     * hiddem
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
    /** Auto passed by List render props. User should not use this. */
    fieldKey?: React.Key | React.Key[];
}

const { Field } = Form;

function FormField({ label, children, ...restProps }: FormFieldProps) {
    return (
        <Field {...restProps}>
            {(control, meta) => (
                <Wrapper>
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
                            onChange: (...args: any) => {
                                control?.onChange(...args);
                                children.props?.onChange?.(...args);
                            },
                        })}
                    </div>
                    <Space inline={false} justify="flex-end">
                        <Overline color="error">{meta.errors[0]}</Overline>
                    </Space>
                </Wrapper>
            )}
        </Field>
    );
}

FormField.displayName = 'FormField';

export default FormField;
