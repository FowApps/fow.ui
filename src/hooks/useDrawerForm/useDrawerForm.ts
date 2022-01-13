import useDrawer from '../useDrawer';
import useForm, { UseFormConfig } from '../useForm';

export interface UseDrawerFormConfig extends UseFormConfig {
    defaultOpen?: boolean;
    autoSubmitClose?: boolean;
    autoResetForm?: boolean;
}

const useDrawerForm = (config: UseDrawerFormConfig) => {
    const drawerFormConfig = config || ({} as UseDrawerFormConfig);
    const {
        defaultOpen = false,
        autoSubmitClose = true,
        autoResetForm = true,
        submit,
        form,
        initialValues,
    } = drawerFormConfig;

    const { isOpen, open, close, drawerProps } = useDrawer({
        defaultOpen,
    });

    const {
        form: formInstance,
        formProps,
        formLoading,
        defaultFormValuesLoading,
        formValues,
        initialValues: initialFormValues,
        formResult,
        submit: formSubmit,
    } = useForm({
        form,
        submit,
        initialValues,
        isOpen,
    });

    const drawerFormProps = {
        ...drawerProps,
        maskClosable: !formLoading,
        onClose: () => {
            if (!formLoading) {
                close();
            }
        },
        onCancel: () => {
            if (!formLoading) {
                formInstance.resetFields();
                close();
            }
        },
        cancelButtonProps: {
            disabled: !!formLoading || !!defaultFormValuesLoading,
        },
        okButtonProps: {
            disabled: !!formLoading || !!defaultFormValuesLoading,
        },
        onOk: () => {
            formSubmit().then(() => {
                if (autoSubmitClose) {
                    close();
                }

                if (autoResetForm) {
                    formInstance.resetFields();
                }
            });
        },
        isLoading: formLoading,
    };

    return {
        form: formInstance,
        isOpen,
        open,
        close,
        drawerProps: drawerFormProps,
        formProps,
        formLoading,
        defaultFormValuesLoading,
        formValues,
        initialValues: initialFormValues,
        formResult,
        submit: formSubmit,
    };
};

export default useDrawerForm;
