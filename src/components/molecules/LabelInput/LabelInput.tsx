import * as React from 'react';
import { ColorPicker, ContainerMenu } from './styles';
import Icon from '../../atoms/Icon';
import Space from '../../atoms/Space';
import Dropdown from '../Dropdown';
import { Button, Divider, Input, Label } from '../../..';
import Subtitle from '../../atoms/Typography/Subtitle';
import { ConfigContext } from '../../../theme/FowThemeProvider';
import { en } from '../Upload/locales/en';
import { tr } from '../Upload/locales/tr';

export type Colors =
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
    text?: string;
    labelColor?: string;
    onChange: (value: ILabelValue[]) => void;
    value: ILabelValue[];
}
export interface ILabel {
    id: string;
    color: Colors;
    text: string;
}

export interface ILabelValue {
    color: Colors;
    text: string;
}

const colors = ['pink', 'orange', 'green', 'blue', 'purple', 'darkPurple'];

const LabelInput = ({ onChange, value }: LabelInputProps): JSX.Element => {
    const { language } = React.useContext(ConfigContext);

    const [selectedColor, setSelectedColor] = React.useState<Colors>('pink');

    const [labelText, setLabelText] = React.useState<string>('');

    const [labelValue, setLabelValue] = React.useState(value);

    const handleSelectColor = (color: Colors) => {
        setSelectedColor(color);
    };

    const handleChangeInput = (inputValue: string) => {
        console.log('inputValue', inputValue);
        setLabelText(inputValue);
    };

    /*     const handleClickDone = () => {
        onchange({
            text: labelText,
            labelColor: selectedColor,
        });
    };
 */

    const onClickDone = () => {
        console.log('labelText', labelText);
        console.log('selectedColor', selectedColor);

        /* State'e item ekleme işlemleri */

        setLabelValue(labelValue);
    };

    const onDeleteLabel = (id: string) => {
        /* Stateden ıtem silem işlemleri */
        console.log('label deleted:', id);
    };

    React.useEffect(() => {
        onChange(labelValue);
    }, [labelValue, onChange]);

    return (
        <Space>
            <Space>
                {labelValue?.map((label: ILabel) => (
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
                content={
                    <ContainerMenu>
                        <Space
                            key="menuItem"
                            direction="vertical"
                            align="start"
                            size="xsmall">
                            <div style={{ width: '100%' }}>
                                <Space
                                    justify="space-between"
                                    inline={false}
                                    style={{ marginBottom: '0.8rem' }}>
                                    <Subtitle level={1}>
                                        {localization[language].addLabel}
                                    </Subtitle>
                                    <Icon
                                        size="xs"
                                        icon="times"
                                        style={{ color: 'gray' }}
                                    />
                                </Space>

                                <Input
                                    value={labelText}
                                    onChange={(inputValue) =>
                                        handleChangeInput(inputValue)
                                    }
                                />
                                {console.log(labelText)}
                            </div>
                            <div>
                                <Space
                                    direction="vertical"
                                    size="xxsmall"
                                    align="start">
                                    <Subtitle level={1}>
                                        {localization[language].selectColor}
                                    </Subtitle>

                                    <Space size="xsmall">
                                        {colors.map((color: Colors) => (
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
                            </div>

                            <Divider size="medium" />
                            <div style={{ width: '100%' }}>
                                <Space justify="flex-end" inline={false}>
                                    <Button
                                        onClick={onClickDone}
                                        color="success"
                                        size="small"
                                        disabled={!selectedColor || !labelText}>
                                        {localization[language].done}
                                    </Button>
                                </Space>
                            </div>
                        </Space>
                    </ContainerMenu>
                }>
                <Button variant="text" leftIcon="plus" color="success">
                    {localization[language].addLabel}
                </Button>
            </Dropdown>
        </Space>
    );
};

export default LabelInput;
