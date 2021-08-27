import React from 'react';
import Slider from 'rc-slider';
import { StyledSlider } from './styles';
import 'rc-slider/assets/index.css';

export interface StatusChangerProps {
    /**
     * minimum value of changer
     */
    min?: number;
    /**
     * maximum value of changer
     */
    max?: number;
    /**
     * marks of changer
     */
    marks: Array<any>;
    /**
     * step of changer
     */
    step?: number;
}

const StatusChanger = ({
    min = 0,
    max = 100,
    marks,
    step = null,
    ...rest
}: StatusChangerProps): JSX.Element => (
    <StyledSlider>
        <Slider min={min} max={max} marks={marks} step={step} {...rest} />
    </StyledSlider>
);

export default StatusChanger;
