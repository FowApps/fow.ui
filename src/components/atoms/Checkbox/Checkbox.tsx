/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import Space from '../Space';

import {
    StyledLabel,
    StyledInput,
    MarkBox,
    Mark,
    LabelText,
    HoverCircle,
} from './styles';

export type CheckboxValueType = string | number | boolean;
export interface CheckboxProps {
    /**
     * input label
     */
    label?: string;
    /**
     * invoke after each
     */
    onChange?: (e: any) => void;
    /**
     * value
     */
    value?: any;
    children?: React.ReactNode;
    /**
     * decides if the checkbox is checked or not
     */
    checked?: boolean;
    /**
     * name of checkbox
     */
    name?: string;
    /**
     * change the availability of the component
     */
    disabled?: boolean;
    /**
     * color sheme of checkbox
     */
    color?: 'primary' | 'grey';
}

export interface CheckboxChangeEventTarget extends CheckboxProps {
    checked: boolean;
}
export interface CheckboxChangeEvent {
    target: CheckboxChangeEventTarget;
    stopPropagation: () => void;
    preventDefault: () => void;
    nativeEvent: MouseEvent;
}

export interface CheckboxOptionType {
    label: React.ReactNode;
    value: CheckboxValueType;
    style?: React.CSSProperties;
    disabled?: boolean;
    onChange?: (e: CheckboxChangeEvent) => void;
}

export interface CheckboxGroupContext {
    name?: string;
    toggleOption?: (option: CheckboxOptionType) => void;
    value?: any;
    disabled?: boolean;
    registerValue: (val: CheckboxValueType) => void;
    cancelValue: (val: CheckboxValueType) => void;
}

export interface AbstractCheckboxGroupProps {
    options?: Array<CheckboxOptionType | string>;
    disabled?: boolean;
}

export interface CheckboxGroupProps extends AbstractCheckboxGroupProps {
    name?: string;
    defaultValue?: Array<CheckboxValueType>;
    value?: Array<CheckboxValueType>;
    onChange?: (checkedValue: Array<CheckboxValueType>) => void;
    direction?: 'vertical' | 'horizontal';
    checked?: any[];
    children?: React.ReactNode;
}

export const GroupContext = React.createContext<CheckboxGroupContext | null>(
    null,
);

const Checkbox = ({
    label = '',
    color = 'primary',
    children,
    ...rest
}: CheckboxProps): JSX.Element => {
    const checkboxGroup = useContext(GroupContext);
    const prevValue = React.useRef(rest.value);

    React.useEffect(() => {
        checkboxGroup?.registerValue(rest.value);
    }, [rest.value]);

    React.useEffect(() => {
        if (rest.value !== prevValue.current) {
            checkboxGroup?.cancelValue(prevValue.current);
            checkboxGroup?.registerValue(rest.value);
        }
        return () => checkboxGroup?.cancelValue(rest.value);
    }, [rest.value]);

    const checkboxProps = { ...rest };

    if (checkboxGroup) {
        checkboxProps.onChange = (...args) => {
            if (rest.onChange) {
                rest.onChange(...args);
            }
            if (checkboxGroup.toggleOption) {
                checkboxGroup.toggleOption({
                    label: children,
                    value: rest.value,
                });
            }
        };
        checkboxProps.name = checkboxGroup.name;
        checkboxProps.checked = checkboxGroup.value.indexOf(rest.value) !== -1;
        checkboxProps.disabled = rest.disabled || checkboxGroup.disabled;
    }

    return (
        <StyledLabel>
            {(label || children) && (
                <LabelText level={2} disabled={checkboxProps.disabled}>
                    {label || children}
                </LabelText>
            )}
            <StyledInput
                {...checkboxProps}
                type="checkbox"
                disabled={checkboxProps.disabled}
                color={color}
            />
            <MarkBox>
                <HoverCircle />
                <Mark icon="check" color="white" size="xs" />
            </MarkBox>
        </StyledLabel>
    );
};

const Group: React.ForwardRefRenderFunction<
    HTMLDivElement,
    CheckboxGroupProps
> = (
    { defaultValue, children, options = [], onChange, direction, ...restProps },
    ref,
) => {
    const [value, setValue] = React.useState<CheckboxValueType[]>(
        restProps.value || restProps.checked || defaultValue || [],
    );
    const [registeredValues, setRegisteredValues] = React.useState<
        CheckboxValueType[]
    >([]);

    React.useEffect(() => {
        if ('value' in restProps) {
            setValue(restProps.value || []);
        }
    }, [restProps, restProps.value]);

    const getOptions = () =>
        options.map((option) => {
            if (typeof option === 'string') {
                return {
                    label: option,
                    value: option,
                };
            }
            return option;
        });

    const cancelValue = (val: string) => {
        setRegisteredValues((prevValues) =>
            prevValues.filter((v) => v !== val),
        );
    };

    const registerValue = (val: string) => {
        setRegisteredValues((prevValues) => [...prevValues, val]);
    };

    const toggleOption = (option: CheckboxOptionType) => {
        const optionIndex = value.indexOf(option.value);
        const newValue = [...value];
        if (optionIndex === -1) {
            newValue.push(option.value);
        } else {
            newValue.splice(optionIndex, 1);
        }
        if (!('value' in restProps)) {
            setValue(newValue);
        }
        const opts = getOptions();
        onChange?.(
            newValue
                .filter((val) => registeredValues.indexOf(val) !== -1)
                .sort((a, b) => {
                    const indexA = opts.findIndex((opt) => opt.value === a);
                    const indexB = opts.findIndex((opt) => opt.value === b);
                    return indexA - indexB;
                }),
        );
    };

    if (options && options.length > 0) {
        children = getOptions().map((option) => (
            <Checkbox
                key={option.value.toString()}
                disabled={
                    'disabled' in option ? option.disabled : restProps.disabled
                }
                value={option.value}
                checked={value.indexOf(option.value) !== -1}
                onChange={option.onChange}>
                {option.label}
            </Checkbox>
        ));
    }

    const context = {
        toggleOption,
        value,
        disabled: restProps.disabled,
        name: restProps.name,

        registerValue,
        cancelValue,
    };

    return (
        <div ref={ref}>
            <GroupContext.Provider value={context}>
                <Space direction={direction} align="start">
                    {children}
                </Space>
            </GroupContext.Provider>
        </div>
    );
};

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
    Group,
);

Checkbox.Group = React.memo(CheckboxGroup);

export default Checkbox;
