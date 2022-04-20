import React from 'react';
import { StyledCard } from './styles';

export type CardProps = {
    isActive?: boolean;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

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
