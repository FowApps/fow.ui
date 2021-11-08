import styled, { css } from 'styled-components';
import color from './color';
import textDecoration from './textDecoration';
import fontStyle from './fontStyle';
import textTransform from './textTransform';

type TextWrapperProps = {
    lineClamp?: number | undefined;
    color:
        | 'primary'
        | 'secondary'
        | 'disabled'
        | 'white'
        | 'black'
        | 'success'
        | 'warning'
        | 'error';
    textDecoration:
        | 'underline'
        | 'overline'
        | 'none'
        | 'underlineOverline'
        | 'lineThrough'
        | 'none';
    textTransfrom: 'none' | 'lowercase' | 'capitalize' | 'uppercase';
    fontStyle: 'normal' | 'italic' | 'oblique';
};

export const StyledText = styled.span<TextWrapperProps>`
    position: inherit;
    display: inherit;
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-weight: inherit;
    font-size: inherit;
    text-overflow: ellipsis;
    line-height: inherit;
    letter-spacing: inherit;

    transition: all 0.3s ease;

    ${(props) => color[props.color]}
    ${(props) => fontStyle[props.fontStyle]}
        ${(props) => textDecoration[props.textDecoration]}
        ${(props) => textTransform[props.textTransfrom]}
        ${(props) =>
        props.lineClamp &&
        css`
            display: -webkit-box;
            -webkit-line-clamp: ${props.lineClamp};
            -webkit-box-orient: vertical;
            overflow: hidden;
        `};
`;
