import styled from 'styled-components';

export const MenuWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    overflow: hidden;
    min-width: 100px;
    border-radius: 16px;
    background-color: ${(props) => props.theme.fow.colors.common.white};
    box-shadow: ${(props) => props.theme.fow.shadows.z12};
    padding-inline: 0;
    padding-block: ${(props) => props.theme.fow.spacing.xsmall};
`;

export const ItemWrapper = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.fow.colors.common.white};
    cursor: pointer;
    padding-inline: ${(props) => props.theme.fow.spacing.medium};
    padding-block: ${(props) => props.theme.fow.spacing.xsmall};
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) =>
            props.theme.fow.colors.primary.transparent8};
    }
`;
