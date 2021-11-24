import React, { useState } from 'react';
import { ColorPicker, LabelInputs } from './styles/LabelInput.style';
import Icon from '../../atoms/Icon';
import Space from '../../atoms/Space';
import Heading from '../../atoms/Typography/Heading';

export interface LabelInputProps {
    text?: string;
    color?: string;
}

const colors = ['pink', 'orange', 'green', 'blue', 'purple', 'darkPurple'];

const LabelInput = ({ color = 'blue' }: LabelInputProps): JSX.Element => {
    const [selectedColor, setSelectedColor] = useState(null);

    const handleSelectedColor = () => {
        setSelectedColor(colors);
    };
    return (
        <LabelInputs color={color}>
            <Heading as="h5">Select Color</Heading>
            {colors.map((colr) => (
                <Space size="xlarge">
                    <ColorPicker
                        onClick={() => {
                            handleSelectedColor(colors);
                        }}
                        color={colr}>
                        {selectedColor === colors && (
                            <Icon icon="check" size="xs" />
                        )}
                    </ColorPicker>
                </Space>
            ))}
        </LabelInputs>
    );
};

export default LabelInput;
