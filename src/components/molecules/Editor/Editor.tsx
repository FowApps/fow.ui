import React, { useCallback, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import { Wrapper } from './styles';

export interface EditorProps {
    /**
     * default value of editor
     */
    defaultValue?: string;
    /**
     * change event
     */
    onChange?: (content: string | undefined) => void;
    /**
     * blur event
     */
    onBlur?: any;
    /**
     * focus event
     */
    onFocus?: any;
    /**
     * validation status flag
     */
    hasValidationError?: boolean;
    value?: string;
}

const EMPTY_STRING = '<p><br></p>';
const CustomButton = () => <span className="octicon octicon-star">ADd</span>;

function insertStar() {
    const cursorPosition = this.quill.getSelection().index;
    this.quill.insertText(cursorPosition, '★');
    this.quill.setSelection(cursorPosition + 1);
}

const CustomToolbar = () => (
    <div id="toolbar">
        <select
            className="ql-header"
            defaultValue={''}
            onChange={(e) => e.persist()}>
            <option value="1" />
            <option value="2" />
            <option selected />
        </select>
        <button className="ql-bold" />
        <button className="ql-italic" />
        <select className="ql-color">
            <option value="red" />
            <option value="green" />
            <option value="blue" />
            <option value="orange" />
            <option value="violet" />
            <option value="#d0d1d2" />
            <option selected />
        </select>
        <button className="ql-insertStar">
            <CustomButton />
        </button>
    </div>
);

const Editor = ({
    onChange,
    defaultValue,
    ...rest
}: EditorProps): JSX.Element => {
    const [value, setValue] = useState(rest.value || defaultValue || '');
    const [isFocused, setIsFocused] = useState(false);

    const modules = {
        toolbar: {
            container: '#toolbar',
            handlers: {
                insertStar,
            },
        },
        clipboard: {
            matchVisual: false,
        },
    };

    const handleChange = useCallback(
        (content: string) => {
            if (content === EMPTY_STRING) {
                setValue('');
                onChange?.(undefined);
            } else {
                setValue(content);
                onChange?.(content);
            }
        },
        [onChange],
    );

    const handleFocus = () => {
        setIsFocused(true);
        rest?.onFocus?.();
    };

    const handleBlur = () => {
        setIsFocused(false);
        rest?.onBlur?.();
    };

    useEffect(() => {
        if (rest.value) {
            handleChange(rest.value);
        }
    }, [handleChange, rest.value]);

    return (
        <Wrapper
            hasValidationError={rest.hasValidationError}
            isFocused={isFocused}>
            <CustomToolbar />
            <ReactQuill
                {...rest}
                theme="snow"
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                modules={modules}
            />
        </Wrapper>
    );
};

export default Editor;
