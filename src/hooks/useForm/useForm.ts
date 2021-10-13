/* eslint-disable dot-notation */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import { useState, useEffect } from 'react';
import Form from 'rc-field-form';

export declare type StoreBaseValue = string | number | boolean;
export declare type StoreValue = StoreBaseValue | Store | StoreBaseValue[];
export interface Store {
    [name: string]: StoreValue;
}

export interface UseFormConfig {
    initialValues?: Store | (() => Promise<Store> | Store);
    form?: any;
    isOpen?: boolean;
    submit?: (formValues: Store) => any;
}

const useForm = (config: UseFormConfig) => {
    const [defaultFormValuesLoading, setDefaultFormValuesLoading] =
        useState(false);

    const [defaultValues, setDefaultValues] = useState({});
    const { initialValues, form, submit, isOpen = true } = config;
    const [formValues, setFormValues] = useState({});
    const [formLoading, setFormLoading] = useState(false);
    const [formResult, setFormResult] = useState();

    let formInstance = form;
    if (!form) [formInstance] = Form['useForm']();

    const onFinish = (formValue: Store) => {
        setFormValues(formValue);
        setFormLoading(true);

        return new Promise((resolve, reject) => {
            formInstance
                .validateFields()
                .then(() => {
                    resolve(
                        Promise.resolve(submit?.(formValue))
                            .then((data) => {
                                setFormLoading(false);
                                setFormResult(data);
                                return data;
                            })
                            .catch((err) => {
                                setFormLoading(false);
                                throw err;
                            }),
                    );
                })
                .catch((validateErr) => {
                    setFormLoading(false);
                    reject(validateErr);
                });
        });
    };

    useEffect(() => {
        let isUnMounted = false;

        if (isOpen) {
            const formNode = document?.getElementsByTagName(
                'FORM',
            )[0] as HTMLFormElement;
            if (formNode) {
                const firstFieldNode = formNode.elements[0] as HTMLElement;
                setTimeout(() => {
                    firstFieldNode?.focus();
                }, 300);
            }

            if (!initialValues) {
                return;
            }
            let value: Store | Promise<Store>;
            if (typeof initialValues === 'function') {
                setDefaultFormValuesLoading(true);
                value = initialValues();
            } else {
                value = initialValues;
            }

            Promise.resolve(value)
                .then((data) => {
                    if (!isUnMounted) {
                        const obj = { ...data };
                        Object.keys(data).forEach((name) => {
                            obj[name] = formInstance.isFieldTouched(name)
                                ? formInstance.getFieldValue(name)
                                : data[name];
                        });
                        setDefaultFormValuesLoading(false);
                        setDefaultValues(data);
                        formInstance.setFieldsValue(obj);
                    }
                })
                .catch(() => {
                    if (!isUnMounted) {
                        setDefaultFormValuesLoading(false);
                    }
                });
        }

        return () => {
            isUnMounted = true;
        };
    }, [isOpen]);

    const formProps = {
        form: formInstance,
        onFinish,
        initialValues: defaultValues,
    };

    return {
        form: formInstance,
        formProps,
        defaultFormValuesLoading,
        formValues,
        initialValues: defaultValues,
        formResult,
        formLoading,
        submit: (values?: Store) => {
            formInstance.setFieldsValue(values);
            return onFinish(formInstance.getFieldsValue(true));
        },
    };
};

export default useForm;
