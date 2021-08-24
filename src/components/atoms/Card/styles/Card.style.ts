import styled from 'styled-components';

type CardProps = {
    isActive: boolean;
};

export const StyledCard = styled.div<CardProps>`
    width: 100%;
    padding: ${(props) => props.theme.fow.spacing.medium};
    border: 1px solid
        ${(props) =>
            props.isActive
                ? props.theme.fow.colors.primary.light
                : props.theme.fow.colors.grey.transparent16};
    border-radius: 0.8rem;
    background-color: ${(props) => props.theme.fow.colors.common.white};
    box-sizing: border-box;
`;
