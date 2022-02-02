/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-alert */
import React, { useContext, useEffect, useState } from 'react';
import { EditorState, convertToRaw, ContentState, Modifier } from 'draft-js';
import { Editor as DraftEditor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import tr from './locales/tr';
import en from './locales/en';

import Icon from '../../atoms/Icon';
import { Wrapper } from './styles';
import { ConfigContext } from '../../../theme/FowThemeProvider';

import Select from '../../atoms/Select';

const EMPTY_TAG = '<p></p>\n';

const translations = {
    tr,
    en,
};

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

const SelectTool = (props: any) => {
    const { editorState, onChange, tool } = props;

    const handleSelect = (val: string) => {
        const contentState = Modifier.replaceText(
            editorState.getCurrentContent(),
            editorState.getSelection(),
            val,
            editorState.getCurrentInlineStyle(),
        );

        onChange(
            EditorState.push(editorState, contentState, 'insert-characters'),
        );
    };

    return (
        <Select
            value={tool.placeholder}
            onSelect={handleSelect}
            placeholder={tool.placeholder}
            style={{ width: 200, marginBottom: 6, marginRight: 4 }}>
            {tool?.options?.map((option) => (
                <Select.Option value={option.value}>
                    {option.label}
                </Select.Option>
            ))}
        </Select>
    );
};

const Editor = ({
    value,
    onChange,
    customTools = [],
    hasValidationError = false,
}) => {
    const { language } = useContext(ConfigContext);
    const [state, setState] = useState<EditorState>(EditorState.createEmpty());
    const [isDefaultValueSetted, setIsDefaultValueSetted] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (editorState: EditorState) => {
        setState(editorState);
        const rawHTML = draftToHtml(
            convertToRaw(editorState.getCurrentContent()),
        );
        if (rawHTML === EMPTY_TAG) {
            onChange?.(undefined);
        } else {
            onChange(rawHTML);
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    useEffect(() => {
        if (value && !isDefaultValueSetted && !isFocused) {
            const html = value;
            const contentBlock = htmlToDraft(html);
            if (contentBlock) {
                const contentState = ContentState.createFromBlockArray(
                    contentBlock.contentBlocks,
                );
                const editorState = EditorState.createWithContent(contentState);
                setState(editorState);
            }
            setIsDefaultValueSetted(true);
        }
    }, [value, isDefaultValueSetted, isFocused]);

    return (
        <Wrapper
            hasValidationError={hasValidationError}
            isFocused={isFocused}
            id="editor">
            <DraftEditor
                onFocus={handleFocus}
                onBlur={handleBlur}
                toolbarClassName="fow-editor-toolbar"
                wrapperClassName="fow-editor-wrapper"
                editorClassName="fow-editor"
                editorState={state}
                onEditorStateChange={handleChange}
                localization={{
                    locale: language,
                    translations: translations[language],
                }}
                toolbarCustomButtons={[
                    <div
                        className="rdw-remove-wrapper"
                        aria-label="rdw-remove-control">
                        <div
                            className="rdw-option-wrapper"
                            onClick={() => {
                                toggleFulllscreen('editor');
                            }}>
                            <Icon icon="expand" />
                        </div>
                    </div>,
                    ...customTools.map((tool) => <SelectTool tool={tool} />),
                ]}
            />
        </Wrapper>
    );
};

export default Editor;
