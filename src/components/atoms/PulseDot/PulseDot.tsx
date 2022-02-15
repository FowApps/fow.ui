import React from 'react';
import { Dot } from './styles';

export interface PulseDotProps {
    color?: 'primary' | 'info' | 'warning' | 'success' | 'error' | 'grey';
}

const PulseDot = ({
    color = 'primary',
    ...rest
}: PulseDotProps): JSX.Element => <Dot color={color} {...rest} />;

export default PulseDot;
