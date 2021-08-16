import React, { JSXElementConstructor } from 'react';
import { useForm, Controller } from 'react-hook-form';

// utils
import { map } from '../../../utils/eachChildren';

export type FormProps = {
    defaultValues?: any;
    onSubmit: (data: any) => void;
    children:
        | React.ReactElement<any, string | JSXElementConstructor<any>>
        | React.ReactElement<any, string | JSXElementConstructor<any>>[];
};

export type FieldProps = {
    label?: string;
    rules?: any;
    name: string;
    children: React.ReactElement<any, string | JSXElementConstructor<any>>;
    control?: any;
};

const Form = ({
    defaultValues,
    onSubmit,
    children,
}: FormProps): JSX.Element => {
    const { handleSubmit, control } = useForm({ defaultValues });

    // add 'control' prop each children field
    const fn = (el: any) => {
        let cloneEl = el;
        if (el?.props?.name && el?.type?.displayName === 'Field') {
            cloneEl = React.cloneElement(el, {
                ...el.props,
                key: el.props.name,
                control,
            });
        }
        return cloneEl;
    };
    return <form onSubmit={handleSubmit(onSubmit)}>{map(children, fn)}</form>;
};

const Field = ({
    label,
    rules,
    name,
    children,
    control,
}: FieldProps): JSX.Element => (
    <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) =>
            // clone each form field and add react-hook-form props, label, required and onChange props.
            React.cloneElement(children[0], {
                ...children[0].props,
                ...field,
                ...fieldState,
                label,
                required: rules && 'required' in rules,
                onChange: (e: any) => {
                    field.onChange(e); // react-hook-form onChange
                    if (children[0]?.props?.onChange) {
                        children[0].props.onChange(e); // user onChange
                    }
                },
            })
        }
    />
);

Field.displayName = 'Field';

Form.Field = Field;

export default Form;
