import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
`;

export const Card = styled.div`
    width: 100%;
    background: ${(props) => props.theme.fow.colors.common.white};
    border: 1px solid
        ${(props) => props.theme.fow.colors.greyDark.transparent32};
    box-sizing: border-box;
    border-radius: 4px;
    padding-inline: ${(props) => props.theme.fow.spacing.xsmall};
    padding-block: ${(props) => props.theme.fow.spacing.xxsmall};
    min-height: 36px;
`;
