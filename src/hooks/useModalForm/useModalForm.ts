import useModal from '../useModal';
import useForm, { UseFormConfig } from '../useForm';

export interface UseModalFormConfig extends UseFormConfig {
    defaultOpen?: boolean;
    autoSubmitClose?: boolean;
    autoResetForm?: boolean;
}

const useModalForm = (config: UseModalFormConfig) => {
    const modalFormConfig = config || ({} as UseModalFormConfig);
    const {
        defaultOpen = false,
        autoSubmitClose = true,
        autoResetForm = true,
        submit,
        form,
        initialValues,
    } = modalFormConfig;

    const { isOpen, open, close, modalProps } = useModal({
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

    const modalFormProps = {
        ...modalProps,
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
        isLoading: formLoading || defaultFormValuesLoading,
    };

    return {
        form: formInstance,
        isOpen,
        open,
        close,
        modalProps: modalFormProps,
        formProps,
        formLoading,
        defaultFormValuesLoading,
        formValues,
        initialValues: initialFormValues,
        formResult,
        submit: formSubmit,
    };
};

export default useModalForm;
