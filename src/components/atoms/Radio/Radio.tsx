import React, { useContext } from 'react';

import {
    StyledLabel,
    LabelText,
    StyledInput,
    MarkBox,
    Mark,
    HoverCircle,
    StyledRadioButton,
    Button,
    ButtonText,
} from './styles';

import type { CheckboxOptionType } from '../Checkbox';
import Space from '../Space';
import useMergedState from '../../../hooks/useMergedState';

export interface RadioProps {
    /**
     * default value
     */
    defaultValue?: any;
    /**
     * value
     */
    value?: any;
    /**
     * handle change event
     */
    onChange?: (e: any) => void;
    /**
     * name
     */
    name?: string;
    /**
     * label
     */
    label?: React.ReactNode;
    /**
     * disabled
     */
    disabled?: boolean;
    /**
     * radio name id
     */
    id?: string;
    /**
     * default check
     */
    defaultChecked?: boolean;
    /**
     * check
     */
    checked?: boolean;
    /**
     * radio button option type
     */
    optionType?: 'button' | 'radio';
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
    optionType?: 'button' | 'radio';
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

const Radio = ({
    label = '',
    optionType = 'radio',
    ...rest
}: RadioProps): JSX.Element => {
    const context = useContext(RadioGroupContext);

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

    return optionType === 'radio' ? (
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
    ) : (
        <StyledRadioButton>
            <StyledInput
                type="radio"
                disabled={rest.disabled}
                {...radioProps}
            />
            <Button disabled={rest.disabled}>
                <ButtonText level={2}>{label}</ButtonText>
            </Button>
        </StyledRadioButton>
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
            const {
                children,
                options,
                disabled,
                value: valueProp,
                optionType,
            } = props;
            let childrenToRender = React.Children.map(children, (child: any) =>
                React.cloneElement(child, { optionType, ...child?.props }),
            );
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
                                optionType={optionType}
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
                            optionType={optionType}
                        />
                    );
                });
            }
            return (
                <div ref={ref}>
                    <Space
                        direction={props.direction}
                        align="start"
                        size={optionType === 'button' ? 'none' : 'small'}>
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
