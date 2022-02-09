/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Space from '../../atoms/Space';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';
import Subtitle from '../../atoms/Typography/Subtitle';
import Icon from '../../atoms/Icon';
import Divider from '../../atoms/Divider';
import Button from '../../atoms/Button';
import Popover from '../../atoms/Popover';

import Dropdown from '../Dropdown';

import { ConfigContext } from '../../../theme/FowThemeProvider';
import useIsMountFirstTime from '../../../hooks/useIsMountFirstTime';

import {
    ColorPicker,
    ContainerMenu,
    TopWrapper,
    BottomWrapper,
} from './styles';

import { en } from './locales/en';
import { tr } from './locales/tr';

export type ColorTypes =
    | 'pink'
    | 'orange'
    | 'green'
    | 'blue'
    | 'purple'
    | 'darkPurple';

const localization = {
    en,
    tr,
};

export interface LabelInputProps {
    /**
     * inheritence of ILabelValue
     */
    defaultValue?: ILabelValue[];
    /**
     * handle change value
     */
    onChange?: (value: ILabelValue[]) => void;
    /**
     * decides how many labels to be displayed at the same time
     */
    maxCount?: number;
}
export interface ILabel {
    /**
     * label id
     */
    id: string;
    /**
     * inheritence of colortype (decides the background color of the labels seperately)
     */
    color: ColorTypes;
    /**
     * label text
     */
    text: string;
}

export interface ILabelValue {
    /**
     * inheritence of colortype (decides the background color of the labels seperately)
     */
    color: ColorTypes;
    /**
     * label text
     */
    text: string;
    /**
     * label id
     */
    id: string;
}

const colors: ColorTypes[] = [
    'pink',
    'orange',
    'green',
    'blue',
    'purple',
    'darkPurple',
];

const LabelInput = ({
    onChange,
    defaultValue = [],
    maxCount = 3,
}: LabelInputProps): JSX.Element => {
    const { language } = React.useContext(ConfigContext);
    const isMountFirstTime = useIsMountFirstTime();

    const [selectedColor, setSelectedColor] =
        React.useState<ColorTypes>('pink');

    const [text, setText] = React.useState<string>('');

    const [value, setValue] = React.useState<ILabelValue[]>(
        defaultValue.map((label) => ({
            color: label.color,
            text: label.text,
            id: uuidv4(),
        })),
    );

    const handleSelectColor = (color: ColorTypes) => {
        setSelectedColor(color);
    };

    const handleChangeInput = (inputValue: string) => {
        setText(inputValue);
    };

    const handleDone = () => {
        setValue((prevValue) => [
            ...prevValue,
            {
                color: selectedColor,
                text,
                id: uuidv4(),
            },
        ]);

        setText('');
    };

    const onDeleteLabel = (id: string) => {
        setValue((preValue) => preValue.filter((label) => label.id !== id));
    };

    const renderLabels = () => {
        if (value.length > maxCount) {
            return (
                <>
                    {value.slice(0, maxCount).map((label) => (
                        <Label
                            key={label.id}
                            text={label.text}
                            color={label.color}
                            size="medium"
                            isClosable
                            onClose={() => {
                                onDeleteLabel(label.id);
                            }}
                        />
                    ))}
                    <Popover
                        placement="bottom"
                        content={
                            <Space style={{ padding: 8 }} size="xxsmall">
                                {value
                                    .slice(maxCount, value.length)
                                    .map((extraLabel) => (
                                        <Label
                                            key={extraLabel.id}
                                            text={extraLabel.text}
                                            color={extraLabel.color}
                                            size="medium"
                                            isClosable
                                            onClose={() => {
                                                onDeleteLabel(extraLabel.id);
                                            }}
                                        />
                                    ))}
                            </Space>
                        }>
                        <Label
                            key="more"
                            text={`+${
                                value.length - value.slice(0, maxCount).length
                            }`}
                            color="blue"
                            size="medium"
                        />
                    </Popover>
                </>
            );
        }
        return value?.map((label: ILabel) => (
            <Label
                key={label.id}
                text={label.text}
                color={label.color}
                size="medium"
                isClosable
                onClose={() => {
                    onDeleteLabel(label.id);
                }}
            />
        ));
    };

    React.useEffect(() => {
        if (!isMountFirstTime) {
            onChange?.(value);
        }
    }, [value]);

    return (
        <Space size="xxsmall">
            {value.length > 0 && <Space size="xxsmall">{renderLabels()}</Space>}
            <Dropdown
                trigger="click"
                content={(close) => (
                    <ContainerMenu>
                        <TopWrapper>
                            <Space
                                direction="vertical"
                                align="start"
                                size="xsmall">
                                <Space justify="space-between" inline={false}>
                                    <Subtitle level={1}>
                                        {localization[language].addLabel}
                                    </Subtitle>
                                    <Icon
                                        cursor="pointer"
                                        onClick={close}
                                        icon="times"
                                    />
                                </Space>
                                <Input
                                    value={text}
                                    onChange={(inputValue) =>
                                        handleChangeInput(inputValue)
                                    }
                                />
                                <Space
                                    direction="vertical"
                                    size="xxsmall"
                                    align="start">
                                    <Subtitle level={1}>
                                        {localization[language].selectColor}
                                    </Subtitle>
                                    <Space size="xsmall">
                                        {colors?.map((color: ColorTypes) => (
                                            <ColorPicker
                                                key={color}
                                                onClick={() => {
                                                    handleSelectColor(color);
                                                }}
                                                color={color}>
                                                {selectedColor === color && (
                                                    <Icon
                                                        icon="check"
                                                        size="xs"
                                                    />
                                                )}
                                            </ColorPicker>
                                        ))}
                                    </Space>
                                </Space>
                            </Space>
                        </TopWrapper>
                        <Divider />
                        <BottomWrapper>
                            <Space justify="flex-end" inline={false}>
                                <Button
                                    onClick={handleDone}
                                    color="success"
                                    size="small"
                                    disabled={!selectedColor || !text}>
                                    {localization[language].done}
                                </Button>
                            </Space>
                        </BottomWrapper>
                    </ContainerMenu>
                )}>
                <Button
                    size="small"
                    variant="text"
                    leftIcon="plus"
                    color="success">
                    {localization[language].addLabel}
                </Button>
            </Dropdown>
        </Space>
    );
};

export default LabelInput;
