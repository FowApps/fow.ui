import styled from 'styled-components';
import setOriantation from './oriantation';
import type from './type';

type DividerProps = {
    orientation: 'left' | 'right' | 'center';
    type: 'horizontal' | 'vertical';
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
    line-height: 1.5715;
    box-sizing: border-box;
    font-feature-settings: 'tnum';

    ${(props) => type[props.type]}
    ${(props) => props.hasTitle && setOriantation(props.orientation)};
`;

export const Title = styled.span`
    display: inline-block;
    padding: 0 ${(props) => props.theme.fow.spacing.small};
    color: ${(props) => props.theme.fow.colors.text.secondary};
    white-space: nowrap;
`;
