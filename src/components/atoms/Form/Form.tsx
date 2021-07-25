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
    defaultValue?: any;
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

    const fn = (el: any) => {
        let cloneEl = el;
        if (el?.props?.name && el?.type?.name === 'Field') {
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
    defaultValue,
    label,
    rules,
    name,
    children,
    control,
}: FieldProps): JSX.Element => (
    <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field, fieldState }) =>
            React.cloneElement(children[0], {
                ...children[0].props,
                ...field,
                ...fieldState,
                label,
                required: rules && 'required' in rules,
            })
        }
    />
);

Form.Field = Field;

export default Form;
