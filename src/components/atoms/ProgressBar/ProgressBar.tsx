import React from 'react';
import { StyledProgressBar, StyledDiv } from './styles';

export interface ProgressBarProps {
    /**
     * decides the height of the bar
     */
    progress?: number;
}

const ProgressBar = ({
    progress = 50,
    ...rest
}: ProgressBarProps): JSX.Element => (
    <StyledProgressBar {...rest}>
        <StyledDiv progress={progress} />
    </StyledProgressBar>
);

export default ProgressBar;
