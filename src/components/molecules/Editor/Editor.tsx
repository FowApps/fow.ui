import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

import BraftEditor, {
    BraftEditorProps,
    EditorState,
    ControlType,
    ExtendControlType,
} from 'braft-editor';
import { ContentUtils } from 'braft-utils';

import Table from 'braft-extensions/dist/table';
import { ConfigContext, IConfig } from '../../../theme/FowThemeProvider';

import { uuidv4 } from '../../../utils/uuid';
import Input from '../../atoms/Input';

import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/table.css';
import { Dropdown, Item, Search, Wrapper } from './styles';

import en from './locales/en';
import tr from './locales/tr';

const localization = {
    tr,
    en,
};

BraftEditor.use(
    Table({
        defaultColumns: 5,
        defaultRows: 3,
        withDropdown: false,
    }),
);

export type CustomControlType = {
    type: 'dropdown';
    key: string;
    text?: string | React.ReactNode;
    title?: string;
    html?: string | null;
    component: React.ReactNode;
};

export type EditorProps = BraftEditorProps & {
    toolbarType?: 'simple' | 'complex';
    hasValidationError?: boolean;
    extraControls?: CustomControlType[];
};

type ControlTypeTypes = {
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

const controlTypes: ControlTypeTypes = {
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

const CustomDropdownTool = ({ onClick, control }) => {
    const [query, setQuery] = useState('');
    const { language } = useContext(ConfigContext);

    return (
        <Dropdown>
            <Search>
                <Input
                    onChange={(value) => {
                        setQuery(value);
                    }}
                    prefixIcon="search"
                    placeholder={localization[language].search}
                />
            </Search>
            {control.options
                ?.filter((option) =>
                    option.label
                        .toLocaleLowerCase()
                        .includes(query.toLocaleLowerCase()),
                )
                ?.map((option) => (
                    <Item
                        onClick={() => {
                            onClick(option.value);
                        }}>
                        {option.label}
                    </Item>
                ))}
        </Dropdown>
    );
};

const Editor = ({
    onChange,
    id = uuidv4(),
    toolbarType = 'simple',
    hasValidationError = false,
    extraControls,
    ...rest
}: EditorProps): JSX.Element => {
    const { language } = useContext(ConfigContext);
    const [editorState, setEditorState] = useState(
        BraftEditor.createEditorState(rest?.value || rest?.defaultValue),
    );
    const [defaultValue, setDefaultValue] = useState(rest.defaultValue);
    const [isDefaultValueSetted, setIsDefaultValueSetted] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (currState: EditorState) => {
        const html = currState.toHTML();

        if (html === EMPTY_TAG) {
            onChange?.(undefined);
            setEditorState(currState);
        } else {
            onChange?.(html);
            setEditorState(currState);
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const insertText = useCallback(
        (text: string) => {
            const newState = ContentUtils.insertHTML(
                editorState,
                `<p>${text}</p>`,
                text,
            );
            setEditorState(newState);
        },
        [editorState],
    );

    const extendControls: ExtendControlType[] = useMemo(
        () =>
            extraControls
                ?.map((control: CustomControlType): ExtendControlType => {
                    if (control.type === 'dropdown') {
                        return {
                            key: control.key,
                            type: control.type,
                            text: control.text,
                            title: control.title,
                            html: control.html || null,
                            showArrow: true,
                            arrowActive: false,
                            autoHide: true,
                            component: (
                                <CustomDropdownTool
                                    onClick={(value: string) => {
                                        insertText(value);
                                    }}
                                    control={control}
                                />
                            ),
                        };
                    }

                    return 'separator';
                })
                .filter(Boolean) || [],
        [extraControls, insertText],
    );

    useEffect(() => {
        if (
            (rest?.value || rest?.defaultValue) &&
            !isDefaultValueSetted &&
            !isFocused
        ) {
            const html = rest?.value || rest?.defaultValue;
            const defaultState = BraftEditor.createEditorState(html);
            setDefaultValue(defaultState);
            setEditorState(defaultState);
            setIsDefaultValueSetted(true);
        }
    }, [rest?.value, rest?.defaultValue, isDefaultValueSetted, isFocused]);

    return (
        <Wrapper isFocused={isFocused} hasValidationError={hasValidationError}>
            <BraftEditor
                {...rest}
                value={editorState}
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
                extendControls={extendControls}
            />
        </Wrapper>
    );
};

export default Editor;
