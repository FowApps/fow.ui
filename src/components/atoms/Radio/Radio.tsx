import React from 'react';

import {
    StyledLabel,
    LabelText,
    StyledInput,
    MarkBox,
    Mark,
    HoverCircle,
} from './styles';

import type { CheckboxOptionType } from '../Checkbox';
import Space from '../Space';
import useMergedState from '../../../hooks/useMergedState';

export interface RadioProps {
    defaultValue?: any;
    value?: any;
    onChange?: (e: any) => void;
    name?: string;
    label?: React.ReactNode;
    disabled?: boolean;
    id?: string;
    defaultChecked?: boolean;
    checked?: boolean;
}

export interface RadioGroupProps extends RadioProps {
    defaultValue?: any;
    value?: any;
    onChange?: (e: any) => void;
    name?: string;
    children?: React.ReactNode;
    options?: Array<CheckboxOptionType | string>;
    id?: string;
    direction?: 'vertical' | 'horizontal';
}

export interface RadioChangeEventTarget extends RadioProps {
    checked: boolean;
}

export interface RadioChangeEvent {
    target: RadioChangeEventTarget;
    stopPropagation: () => void;
    preventDefault: () => void;
    nativeEvent: MouseEvent;
}

export interface RadioGroupContextProps {
    onChange: (e: RadioChangeEvent) => void;
    value: any;
    disabled?: boolean;
    name?: string;
}

const RadioGroupContext = React.createContext<RadioGroupContextProps | null>(
    null,
);

const RadioGroupContextProvider = RadioGroupContext.Provider;

const Radio = ({ label = '', ...rest }: RadioProps): JSX.Element => {
    const context = React.useContext(RadioGroupContext);

    const onChange = (e: RadioChangeEvent) => {
        rest.onChange?.(e);
        context?.onChange?.(e);
    };

    const radioProps = { ...rest };

    if (context) {
        radioProps.name = context.name;
        radioProps.onChange = onChange;
        radioProps.checked = rest.value === context.value;
        radioProps.disabled = rest.disabled || context.disabled;
    }

    return (
        <StyledLabel>
            {label && (
                <LabelText level={2} disabled={rest.disabled}>
                    {label}
                </LabelText>
            )}
            <StyledInput
                type="radio"
                disabled={rest.disabled}
                {...radioProps}
            />
            <MarkBox>
                <Mark />
                <HoverCircle />
            </MarkBox>
        </StyledLabel>
    );
};

const Group = React.forwardRef<HTMLDivElement, RadioGroupProps>(
    (props, ref) => {
        const [value, setValue] = useMergedState(props.defaultValue, {
            value: props.value,
        });

        const onRadioChange = (ev: RadioChangeEvent) => {
            const lastValue = value;
            const val = ev.target.value;
            if (!('value' in props)) {
                setValue(val);
            }
            const { onChange } = props;
            if (onChange && val !== lastValue) {
                onChange(ev);
            }
        };

        const renderRadioGroup = () => {
            const { children, options, disabled, value: valueProp } = props;
            let childrenToRender = children;
            if (options && options.length > 0) {
                childrenToRender = options.map((option) => {
                    if (typeof option === 'string') {
                        return (
                            <Radio
                                key={option}
                                disabled={disabled}
                                value={option}
                                checked={valueProp === option}
                                label={option}
                            />
                        );
                    }
                    return (
                        <Radio
                            key={`radio-group-value-options-${option.value}`}
                            disabled={option.disabled || disabled}
                            value={option.value}
                            checked={valueProp === option.value}
                            label={option.label}
                        />
                    );
                });
            }
            return (
                <div ref={ref}>
                    <Space direction={props.direction} align="start">
                        {childrenToRender}
                    </Space>
                </div>
            );
        };

        return (
            <RadioGroupContextProvider
                value={{
                    onChange: onRadioChange,
                    value,
                    disabled: props.disabled,
                    name: props.name,
                }}>
                {renderRadioGroup()}
            </RadioGroupContextProvider>
        );
    },
);

Radio.Group = React.memo(Group);

export default Radio;
