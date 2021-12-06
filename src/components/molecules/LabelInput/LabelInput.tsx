import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
    Button,
    Divider,
    Input,
    Label,
    Dropdown,
    Space,
    Icon,
    Typography,
} from '../../..';

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

const { Link, Subtitle } = Typography;

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
    defaultValue?: ILabelValue[];
    onChange?: (value: ILabelValue[]) => void;
}
export interface ILabel {
    id: string;
    color: ColorTypes;
    text: string;
}

export interface ILabelValue {
    color: ColorTypes;
    text: string;
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

    React.useEffect(() => {
        if (!isMountFirstTime) {
            onChange?.(value);
        }
    }, [value]);

    return (
        <Space>
            <Space>
                {value?.map((label: ILabel) => (
                    <Label
                        key={label.id}
                        text={label.text}
                        color={label.color}
                        size="small"
                        isClosable
                        onClose={() => {
                            onDeleteLabel(label.id);
                        }}
                    />
                ))}
            </Space>
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
                <Link level={3} leftIcon="plus" color="success">
                    {localization[language].addLabel}
                </Link>
            </Dropdown>
        </Space>
    );
};

export default LabelInput;
