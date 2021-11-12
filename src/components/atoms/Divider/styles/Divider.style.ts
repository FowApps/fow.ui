import styled, { css } from 'styled-components';
import setOriantation from './oriantation';
import direction from './direction';

type DividerProps = {
    orientation: 'left' | 'right' | 'center';
    direction: 'horizontal' | 'vertical';
    size:
        | 'xxsmall'
        | 'xsmall'
        | 'small'
        | 'medium'
        | 'large'
        | 'xlarge'
        | 'xxlarge'
        | 'xxxlarge';
    hasTitle: boolean;
};

export const StyledDivider = styled.div<DividerProps>`
    margin: 0;
    padding: 0;
    border-top: ${(props) =>
        props.hasTitle
            ? 'none'
            : `1px solid ${props.theme.fow.colors.divider}`};
    color: ${(props) => props.theme.fow.colors.divider};
    list-style: none;
    font-variant: tabular-nums;
    font-size: 1.4rem;
    line-height: 2.2rem;
    box-sizing: border-box;
    font-feature-settings: 'tnum';
    ${(props) =>
        props.direction === 'horizontal' &&
        css`
            margin: ${props.theme.fow.spacing[props.size]} 0;
        `};
    ${(props) =>
        props.direction === 'vertical' &&
        css`
            margin: 0 ${props.theme.fow.spacing[props.size]};
        `};

    ${(props) => direction[props.direction]}
    ${(props) => props.hasTitle && setOriantation(props.orientation)};
`;

export const Title = styled.span`
    display: inline-block;
    padding: 0 ${(props) => props.theme.fow.spacing.small};
    color: ${(props) => props.theme.fow.colors.text.secondary};
    white-space: nowrap;
`;
