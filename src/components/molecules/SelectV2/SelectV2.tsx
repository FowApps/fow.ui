import React, {
    ReactNode,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import useStateRef from '../../../hooks/useStateRef';
import { ConfigContext } from '../../../theme/FowThemeProvider';
import Badge from '../../atoms/Badge';
import Icon from '../../atoms/Icon';
import Input from '../../atoms/Input';
import Loader from '../../atoms/Loader';
import Space from '../../atoms/Space';
import Body from '../../atoms/Typography/Body';
import MultipleSelect from './components/MultipleSelect';
// eslint-disable-next-line import/no-cycle
import SingleSelect from './components/SingleSelect';
import { en } from './locales/en';
import { tr } from './locales/tr';
import {
    ClearButtonWrapper,
    DropdownButtonContent,
    DropdownButtonWrapper,
    DropdownContentWrapper,
    DropdownWrapper,
} from './styles';

export type OptionType = {
    /**
     * assign the value to be displayed
     */
    value: string | number;
    /**
     * select text
     */
    text: string;
};
export interface Props {
    /**
     * placeholder text
     */
    placeholder?: string;
    /**
     * no items found content
     */
    noResultContent?: ReactNode;
    /**
     * data type must be like that: [{ value: '', text: '' }]
     */
    options?: OptionType[] | any;
    /**
     * dropdown input style
     */
    variant?: 'white' | 'grey';
    /**
     * dropdown and button disabled
     */
    disabled?: boolean;
    /**
     * no items extra content
     */
    content?: React.ReactNode;
    /**
     * loading animations
     */
    loader?: boolean;
    /**
     * searchbox visible
     */
    showSearch?: boolean;
    /**
     * clear all component's val set to null when related html element ref is clicked
     */
    clearAllButtonRef?: React.MutableRefObject<HTMLElement>;
    /**
     * option types can be multiple with checkbox or single as radio.
     */
    mode?: 'single' | 'multiple';
    /**
     * onchange event
     */
    onChange?: (value: OptionType | any, item: OptionType | any) => void;

    /**
     * onscroll event
     */
    onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;

    /**
     * onsearch event
     */
    onSearch?: (value: string) => void;
}

type StateProps = {
    text: string;
    value: string | number;
};

const localization = {
    tr,
    en,
};

const SelectV2 = ({
    options,
    onSearch,
    onChange,
    loader,
    disabled,
    showSearch,
    variant = 'white',
    mode = 'single',
    placeholder,
    ...props
}: Props) => {
    const { language } = useContext(ConfigContext);
    const { value: selectValues }: any = props;
    const [isInitialVal, setIsInitialVal] = useState(false);
    const [offsetWidth, ref] = useStateRef((node) => node?.offsetWidth || 0);
    const [wrapperWidth, setWrapperWidth] = useState<any>(offsetWidth);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState<boolean>(!options);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [selectedItem, setSelectedItem] = useState<OptionType | any>();
    const [formValues, setFormValues] = useState<StateProps[]>([]);

    const rest = {
        language,
        selectValues,
        isInitialVal,
        setIsInitialVal,
        searchText,
        setSearchText,
        loading,
        loader,
        setLoading,
        disabled,
        options,
        onChange,
        formValues,
        setFormValues,
        setSelectedItem,
        selectedItem,
        showSearch,
        onSearch,
        ...props,
    };

    const updateValues = (values) => {
        if (!values && !options) return;

        if (mode === 'multiple') {
            if (typeof values === 'string') {
                options.forEach((item) => {
                    if (item.value === values) {
                        setFormValues([item]);
                    }
                });
            } else if (values?.length > 0) {
                values.forEach((item) => {
                    const optionValue = item.value || item;
                    options.forEach((option) => {
                        if (optionValue === option.value) {
                            if (Array.isArray(formValues)) {
                                setFormValues((prevState) => [
                                    ...prevState,
                                    option,
                                ]);
                            } else {
                                setFormValues([option]);
                            }
                        }
                    });
                });
            } else {
                setFormValues([values]);
            }
        } else {
            options.forEach((option) => {
                const optionValue = values.value || values;
                if (option.value === optionValue) {
                    setSelectedItem(option);
                }
            });
        }
    };

    useEffect(() => {
        if (!isInitialVal && selectValues && options?.length > 0) {
            updateValues(selectValues);
            setIsInitialVal(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectValues, options]);

    const handleClearSelect = () => {
        setSelectedItem(undefined);
        onChange?.(undefined, undefined);
    };

    const handleClearAll = () => {
        setFormValues([]);
        onChange?.(undefined, undefined);
        setSearchText('');
    };

    useEffect(() => {
        if (searchText) {
            searchInputRef.current?.focus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options, searchText]);

    useEffect(() => {
        setWrapperWidth(offsetWidth);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offsetWidth]);

    useEffect(() => {
        onSearch?.(searchText);
    }, [searchText]);

    return (
        <DropdownWrapper
            ref={ref}
            disabled={disabled}
            width={wrapperWidth}
            trigger="click"
            onClose={() => setSearchText('')}
            isClosedWhenMouseLeave
            onAfterVisibleChange={(visible) => {
                if (visible) {
                    setTimeout(() => {
                        searchInputRef.current?.focus();
                    }, 300);
                }
            }}
            content={() => (
                <DropdownContentWrapper>
                    {(!!options?.length ||
                        !!formValues.length ||
                        searchText.length > 0) &&
                        showSearch && (
                            <Input
                                ref={searchInputRef}
                                disabled={!options}
                                value={searchText}
                                suffixIcon="search"
                                placeholder="Search"
                                onChange={(value) => {
                                    setSearchText(value.toLowerCase());
                                }}
                            />
                        )}
                    {loader ? (
                        <Loader
                            height={150}
                            isLoading
                            text={localization[language].loading}
                        />
                    ) : (
                        <>
                            {mode === 'multiple' ? (
                                <MultipleSelect {...rest} />
                            ) : (
                                <SingleSelect {...rest} />
                            )}
                        </>
                    )}
                </DropdownContentWrapper>
            )}>
            {({ isOpen }) => (
                <DropdownButtonWrapper
                    variant="text"
                    type="button"
                    disabled={disabled}
                    buttonType={variant}
                    isOpen={isOpen}
                    className={isOpen ? 'opened' : ''}>
                    <DropdownButtonContent
                        justify="space-between"
                        inline={false}>
                        <Space justify="space-between" inline={false}>
                            <Body level={1} color="secondary">
                                {selectedItem?.text ||
                                    formValues?.[0]?.text ||
                                    placeholder}
                            </Body>

                            {selectedItem && (
                                <ClearButtonWrapper
                                    color="primary"
                                    size="small"
                                    variant="contained"
                                    onClick={() =>
                                        !disabled && handleClearSelect()
                                    }>
                                    <Icon color="primary" icon="times" />
                                </ClearButtonWrapper>
                            )}
                            {Array.isArray(formValues) &&
                                formValues?.length > 0 && (
                                    <Space>
                                        {formValues?.length > 1 && (
                                            <Badge
                                                size="medium"
                                                text={`+ ${
                                                    formValues.length - 1
                                                }`}
                                                variant="outlined"
                                                color="primary"
                                            />
                                        )}
                                        <ClearButtonWrapper
                                            color="primary"
                                            size="small"
                                            variant="contained"
                                            onClick={() =>
                                                !disabled && handleClearAll()
                                            }>
                                            <Icon
                                                color="primary"
                                                icon="times"
                                            />
                                        </ClearButtonWrapper>
                                    </Space>
                                )}
                        </Space>
                        <Icon
                            size="sm"
                            icon={!isOpen ? 'chevron-down' : 'chevron-up'}
                            color="#919EAB"
                        />
                    </DropdownButtonContent>
                </DropdownButtonWrapper>
            )}
        </DropdownWrapper>
    );
};

export default SelectV2;
