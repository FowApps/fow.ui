import styled from 'styled-components';
import setOriantation from './oriantation';
import type from './type';

type DividerProps = {
    orientation: 'left' | 'right' | 'center';
    type: 'horizontal' | 'vertical';
    hasTitle: boolean;
};

export const StyledDivider = styled.div<DividerProps>`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.colors.divider};
    font-size: 1.4rem;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum';
    border-top: ${(props) =>
        props.hasTitle ? 'none' : `1px solid ${props.theme.colors.divider}`};

    ${(props) => type[props.type]}
    ${(props) => props.hasTitle && setOriantation(props.orientation)};
`;

export const Title = styled.span`
    display: inline-block;
    padding: 0 ${(props) => props.theme.spacing.small};
    color: ${(props) => props.theme.colors.text.secondary};
    white-space: nowrap;
`;
