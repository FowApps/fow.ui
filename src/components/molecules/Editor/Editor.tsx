import React, { useContext, useEffect, useState } from 'react';

import BraftEditor, {
    BraftEditorProps,
    EditorState,
    ControlType,
} from 'braft-editor';
import Table from 'braft-extensions/dist/table';
import { ConfigContext, IConfig } from '../../../theme/FowThemeProvider';

import { uuidv4 } from '../../../utils/uuid';

import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/table.css';
import { Wrapper } from './styles';

BraftEditor.use(
    Table({
        defaultColumns: 5,
        defaultRows: 3,
        withDropdown: false,
    }),
);

export type EditorProps = BraftEditorProps & {
    toolbarType?: 'simple' | 'complex';
    hasValidationError?: boolean;
};

type ControlTypes = {
    simple: ControlType[];
    complex: ControlType[];
};

const EMPTY_TAG = '<p></p>';

const languageFn = (languages: any, language: IConfig['language']) => {
    const extendedLanguageConfig = {
        ...languages,
        tr: {
            ...languages.tr,
            rows: 'Satırlar',
            columns: 'Sütunlar',
            cancel: 'İptal Et',
            insertTable: 'Tablo Ekle',
            removeTable: 'Tabloyu Sil',
            insertColumn: 'Sütun Ekle',
            removeColumn: 'Sütun Sil',
            insertRow: 'Satır Ekle',
            removeRow: 'Satır Sil',
            mergeCells: 'Hücreleri Birleştir',
            splitCell: 'Hücreyi Ayır',
        },
    };

    return extendedLanguageConfig[language];
};

const controlTypes: ControlTypes = {
    simple: [
        'undo',
        'redo',
        'separator',
        'headings',
        'separator',
        'text-color',
        'bold',
        'italic',
        'underline',
        'strike-through',
        'separator',
        'headings',
        'list-ul',
        'list-ol',
        'blockquote',
        'separator',
        'link',
        'separator',
        'hr',
        'separator',
        'fullscreen',
        'separator',
        'clear',
    ],
    complex: [
        'undo',
        'redo',
        'separator',
        'headings',
        'separator',
        'font-size',
        'line-height',
        'letter-spacing',
        'separator',
        'text-color',
        'bold',
        'italic',
        'underline',
        'strike-through',
        'separator',
        'text-indent',
        'text-align',
        'list-ul',
        'list-ol',
        'blockquote',
        'separator',
        'link',
        'separator',
        'hr',
        'separator',
        'media',
        'table',
        'separator',
        'fullscreen',
        'clear',
    ],
};

const Editor = ({
    onChange,
    id = uuidv4(),
    toolbarType = 'simple',
    hasValidationError = false,
    ...rest
}: EditorProps): JSX.Element => {
    const { language } = useContext(ConfigContext);

    const [defaultValue, setDefaultValue] = useState(rest.defaultValue);
    const [isDefaultValueSetted, setIsDefaultValueSetted] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (editorState: EditorState) => {
        const html = editorState.toHTML();

        if (html === EMPTY_TAG) {
            onChange?.(undefined);
        } else {
            onChange?.(html);
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    useEffect(() => {
        if (
            (rest?.value || rest?.defaultValue) &&
            !isDefaultValueSetted &&
            !isFocused
        ) {
            const html = rest?.value || rest?.defaultValue;
            const defaultState = BraftEditor.createEditorState(html);
            setDefaultValue(defaultState);
            setIsDefaultValueSetted(true);
        }
    }, [rest?.value, rest?.defaultValue, isDefaultValueSetted, isFocused]);

    return (
        <Wrapper isFocused={isFocused} hasValidationError={hasValidationError}>
            <BraftEditor
                {...rest}
                id={id}
                editorId={id}
                defaultValue={defaultValue}
                language={(languages) => languageFn(languages, language)}
                imageResizable
                imageEqualRatio
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                controls={controlTypes[toolbarType] || controlTypes.simple}
            />
        </Wrapper>
    );
};

export default Editor;
