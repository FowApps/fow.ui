import React from 'react';
import { StyledCard } from './styles';

export interface CardProps {
    isActive?: boolean;
    children: React.ReactNode;
}

const Card = ({
    isActive = false,
    children,
    ...rest
}: CardProps): JSX.Element => (
    <StyledCard isActive={isActive} {...rest}>
        {children}
    </StyledCard>
);

export default Card;
