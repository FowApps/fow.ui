import React from 'react';
import { StyledCard } from './styles';

export interface CardProps {
    children: React.ReactNode;
}

const Card = ({ children, ...rest }: CardProps): JSX.Element => (
    <StyledCard {...rest}>{children}</StyledCard>
);

export default Card;
