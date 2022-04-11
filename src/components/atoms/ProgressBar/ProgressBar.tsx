import React from 'react';
import { StyledProgressBar, StyledDiv } from './styles';

export interface ProgressBarProps {
    /**
     * decides the height of the bar
     */
    progress?: number;
    /**
     * color range change direction
     */
    reverse?: boolean | undefined;
}

const ProgressBar = ({
    progress = 50,
    reverse = false,
    ...rest
}: ProgressBarProps): JSX.Element => (
    <StyledProgressBar {...rest}>
        <StyledDiv progress={progress} reverse={reverse} />
    </StyledProgressBar>
);

export default ProgressBar;
