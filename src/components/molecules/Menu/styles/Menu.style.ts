import styled from 'styled-components';

export const MenuWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    min-width: 150px;
    padding-inline: 0;
    padding-block: ${(props) => props.theme.fow.spacing.xsmall};
    overflow: hidden;
    background-color: ${(props) => props.theme.fow.colors.common.white};
    border-radius: 16px;
    box-shadow: ${(props) => props.theme.fow.shadows.z12};
`;

export const ItemWrapper = styled.div`
    width: 100%;
    padding-inline: ${(props) => props.theme.fow.spacing.medium};
    padding-block: ${(props) => props.theme.fow.spacing.xsmall};
    background-color: ${(props) => props.theme.fow.colors.common.white};
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) =>
            props.theme.fow.colors.primary.transparent8};
    }
`;
