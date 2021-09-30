import styled from 'styled-components';
import color from './color';
import textDecoration from './textDecoration';
import fontStyle from './fontStyle';
import textTransform from './textTransform';

type TextWrapperProps = {
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
    margin: inherit;
    padding: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;

    ${(props) => color[props.color]}
    ${(props) => fontStyle[props.fontStyle]}
    ${(props) => textDecoration[props.textDecoration]}
    ${(props) => textTransform[props.textTransfrom]}
`;
