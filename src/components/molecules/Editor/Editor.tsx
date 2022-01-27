/* eslint-disable no-alert */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import { Wrapper } from './styles';

import { tr } from './locales/tr';
import { en } from './locales/en';

import { ConfigContext } from '../../../theme/FowThemeProvider';
import Tooltip from '../../atoms/Tooltip';
import Icon from '../../atoms/Icon';

type OptionType = {
    value: string;
    text: string;
};

type ButtonOptionTypes = {
    label: string;
    action: () => void;
    name: string;
};

type SelectOptionTypes = {
    label: string;
    options: OptionType[];
    action: (value: string) => void;
    name: string;
};

export type CustomToolOptionType =
    | {
          type: 'button';
          options: ButtonOptionTypes;
      }
    | {
          type: 'select';
          options: SelectOptionTypes;
      };

export interface EditorProps {
    id: string;
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
    extraTools?: CustomToolOptionType[];
    compact?: boolean;
}

interface CustomToolbarProps {
    language: 'tr' | 'en';
    editorId: string;
    toolbarId: string;
    extraTools?: CustomToolOptionType[];
    compact?: boolean;
}

const localization = {
    tr,
    en,
};

const EMPTY_STRING = '<p><br></p>';

// function defaultImageUpload(file: File): Promise<string> {
//     return new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.onloadend = () => resolve(reader.result as string);
//         reader.readAsDataURL(file);
//     });
// }

const toggleFulllscreen = (id: string) => {
    const editor = document.getElementById(id);
    if (!document.fullscreenElement && editor) {
        editor.requestFullscreen().catch((err) => {
            alert(
                `Error attempting to enable full-screen mode: ${err.message} (${err.name})`,
            );
        });
    } else {
        document.exitFullscreen();
    }
};

const CustomToolbar = ({
    language,
    extraTools,
    editorId,
    toolbarId,
    compact,
}: CustomToolbarProps) => (
    <div id={toolbarId}>
        <div className="ql-formats">
            <select className="ql-header">
                <option value="1">{localization[language].heading[1]}</option>
                <option value="2">{localization[language].heading[2]}</option>
                <option value="3">{localization[language].heading[3]}</option>
                <option value="4">{localization[language].heading[4]}</option>
                <option value="5">{localization[language].heading[5]}</option>
                <option value="6">{localization[language].heading[6]}</option>
                <option selected />
            </select>
        </div>
        <div className="ql-formats">
            <Tooltip overlay={localization[language].bold} placement="bottom">
                <button type="button" className="ql-bold">
                    <Icon icon="bold" />
                </button>
            </Tooltip>
            <Tooltip overlay={localization[language].italic} placement="bottom">
                <button type="button" className="ql-italic" />
            </Tooltip>
            <Tooltip
                overlay={localization[language].underline}
                placement="bottom">
                <button type="button" className="ql-underline" />
            </Tooltip>
            <Tooltip overlay={localization[language].strike} placement="bottom">
                <button type="button" className="ql-strike" />
            </Tooltip>
        </div>
        <div className="ql-formats">
            <Tooltip overlay={localization[language].color} placement="bottom">
                <select className="ql-color">
                    <option value="red" />
                    <option value="green" />
                    <option value="blue" />
                    <option value="orange" />
                    <option value="violet" />
                    <option value="#d0d1d2" />
                    <option selected />
                </select>
            </Tooltip>
            {!compact && (
                <Tooltip
                    overlay={localization[language].background}
                    placement="bottom">
                    <select className="ql-background">
                        <option value="red" />
                        <option value="green" />
                        <option value="blue" />
                        <option value="orange" />
                        <option value="violet" />
                        <option value="#d0d1d2" />
                        <option selected />
                    </select>
                </Tooltip>
            )}
        </div>
        <div className="ql-formats">
            <Tooltip
                overlay={localization[language].orderedList}
                placement="bottom">
                <button type="button" className="ql-list" value="ordered" />
            </Tooltip>
            <Tooltip
                overlay={localization[language].unorderedList}
                placement="bottom">
                <button type="button" className="ql-list" value="bullet" />
            </Tooltip>
        </div>
        {!compact && (
            <>
                <div className="ql-formats">
                    <Tooltip
                        overlay={localization[language].indent}
                        placement="bottom">
                        <button
                            type="button"
                            className="ql-indent"
                            value="-1"
                        />
                    </Tooltip>
                    <Tooltip
                        overlay={localization[language].indent}
                        placement="bottom">
                        <button
                            type="button"
                            className="ql-indent"
                            value="+1"
                        />
                    </Tooltip>
                </div>
                <Tooltip
                    overlay={localization[language].align}
                    placement="bottom">
                    <div className="ql-formats">
                        <select className="ql-align">
                            <option value="right" />
                            <option value="center" />
                            <option value="justify" />
                            <option selected />
                        </select>
                    </div>
                </Tooltip>
                <div className="ql-formats">
                    <Tooltip
                        overlay={localization[language].image}
                        placement="bottom">
                        <button type="button" className="ql-image" />
                    </Tooltip>
                    <Tooltip
                        overlay={localization[language].video}
                        placement="bottom">
                        <button type="button" className="ql-video" />
                    </Tooltip>
                </div>
            </>
        )}
        <Tooltip overlay={localization[language].fullscreen} placement="bottom">
            <div className="ql-formats">
                <button
                    type="button"
                    className="ql-fullscreen"
                    onClick={() => {
                        toggleFulllscreen(editorId);
                    }}>
                    <Icon icon="expand" style={{ width: 17 }} />
                </button>
            </div>
        </Tooltip>
        <Tooltip overlay={localization[language].clear} placement="bottom">
            <div className="ql-formats">
                <button type="button" className="ql-clean" />
            </div>
        </Tooltip>
        {extraTools?.map((tool) => {
            switch (tool.type) {
                case 'button':
                    return (
                        <div key={tool.options.name} className="ql-formats">
                            <button
                                type="button"
                                className={`ql-${tool.options.name}`}>
                                {tool.options.label}
                            </button>
                        </div>
                    );

                case 'select':
                    return (
                        <div key={tool.options.name} className="ql-formats">
                            <select
                                placeholder={tool.options.label}
                                className={`custom-tool ql-${tool.options.name}`}>
                                {tool.options.options.map((option) => (
                                    <option
                                        value={option.value}
                                        key={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                        </div>
                    );

                default:
                    return null;
            }
        })}
    </div>
);

const Editor = ({
    onChange,
    defaultValue,
    extraTools,
    id = 'fow',
    compact = true,
    ...rest
}: EditorProps): JSX.Element => {
    const { language } = useContext(ConfigContext);
    const [value, setValue] = useState(rest.value || defaultValue || '');
    const [isFocused, setIsFocused] = useState(false);
    const [initialized, setInitialized] = useState(false);

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
        if (rest?.value && !initialized) {
            handleChange(rest?.value);
            setInitialized(true);
        }
    }, [handleChange, initialized, rest?.value]);

    return (
        <Wrapper
            id={`fow-editor-${id}`}
            hasValidationError={rest.hasValidationError}
            isFocused={isFocused}>
            <CustomToolbar
                language={language}
                extraTools={extraTools}
                toolbarId={`toolbar-${id}`}
                editorId={`fow-editor-${id}`}
                compact={compact}
            />
            <ReactQuill
                {...rest}
                theme="snow"
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                modules={{
                    toolbar: {
                        container: `#toolbar-${id}`,
                        handlers: extraTools?.reduce(
                            (acc, cur) => ({
                                ...acc,
                                [cur.options.name]: cur.options.action,
                            }),
                            {},
                        ),
                    },
                }}
            />
        </Wrapper>
    );
};

export default Editor;
