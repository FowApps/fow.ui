import * as React from 'react';
import { ColorPicker, ContainerMenu } from './styles';
import Icon from '../../atoms/Icon';
import Space from '../../atoms/Space';
import Heading from '../../atoms/Typography/Heading';
import Dropdown from '../Dropdown';
import { Button, Divider, Input, Label } from '../../..';

export type Colors =
    | 'pink'
    | 'orange'
    | 'green'
    | 'blue'
    | 'purple'
    | 'darkPurple';

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
                {labelValue.map((label: ILabel) => (
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
                            size="small">
                            <div style={{ width: '100%' }}>
                                <Space justify="space-between" inline={false}>
                                    <Heading as="h5">Add Label</Heading>
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
                            <br />
                            <div>
                                <Space
                                    direction="vertical"
                                    size="small"
                                    align="start">
                                    <Heading as="h5">Select Color</Heading>
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
                                <Space justify="flex-end">
                                    <Button
                                        onClick={onClickDone}
                                        color="success"
                                        size="small"
                                        disabled={!selectedColor || !labelText}>
                                        Done
                                    </Button>
                                </Space>
                            </div>
                        </Space>
                    </ContainerMenu>
                }>
                <Button variant="text" leftIcon="plus" color="success">
                    Add Label
                </Button>
            </Dropdown>
        </Space>
    );
};

export default LabelInput;
