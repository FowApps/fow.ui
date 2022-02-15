import React, {
    useState,
    RefObject,
    useEffect,
    ComponentPropsWithRef,
} from 'react';

import { Wrapper, StyledTextArea, TextareaWrapper } from './styles';

export interface TextAreaProps
    extends Omit<ComponentPropsWithRef<'textarea'>, 'onChange'> {
    /**
     * Clear
     */
    allowClear?: boolean;
    /**
     * Disabled
     */
    disabled?: boolean;
    /**
     * ValidationError
     */
    hasValidationError?: boolean;
    /**
     * Max rows
     */
    maxRows?: number;
    /**
     * Min rows
     */
    minRows?: number;
    /**
     * autosize
     */
    autosize?: boolean;
    onChange?: (value: string) => void;
}

function fixControlledValue<T>(value: T) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

const TextArea = (
    {
        autosize = false,
        maxRows = undefined,
        minRows = undefined,
        disabled = false,
        hasValidationError = false,
        ...rest
    }: TextAreaProps,
    ref: RefObject<HTMLTextAreaElement>,
): JSX.Element => {
    const [val, setVal] = useState(rest.value);

    const handleChange = (e) => {
        setVal(e.target.value);
        rest.onChange?.(e.target.value);
    };

    useEffect(() => {
        setVal(fixControlledValue(rest.value));
    }, [rest.value]);

    return (
        <Wrapper>
            <TextareaWrapper>
                <StyledTextArea
                    ref={ref}
                    hasValidationError={hasValidationError}
                    disabled={disabled}
                    value={val}
                    onChange={handleChange}
                    minRows={minRows}
                    maxRows={maxRows}
                    autosize={autosize}
                />
            </TextareaWrapper>
        </Wrapper>
    );
};

export default React.forwardRef(TextArea);
