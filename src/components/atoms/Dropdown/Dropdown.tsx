import React from 'react';
import { StyledWrapper } from './styles';

export interface DropdownProps {
    // trigger: string;
    children?: React.ReactNode;
}

const Dropdown = ({
    // trigger = 'Button',
    children,
}: DropdownProps): JSX.Element => (
    <StyledWrapper>
        <div>{children}</div>
    </StyledWrapper>
);

export default Dropdown;
