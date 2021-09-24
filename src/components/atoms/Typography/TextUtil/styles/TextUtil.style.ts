import styled from 'styled-components';
import setTextTransform from '../../../../../utils/setTextTransform';
import color from './color';
import hoverColor from './hoverColor';
import textDecoration from './textDecoration';
import fontStyle from './fontStyle';

type TextProps = {
    color:
        | 'primary'
        | 'secondary'
        | 'disabled'
        | 'white'
        | 'black'
        | 'success'
        | 'warning'
        | 'error';
    hoverColor:
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
    textTransfrom: 'lowercase' | 'capitalize' | 'uppercase';
    fontStyle: 'normal' | 'italic' | 'oblique';
};

export const StyledText = styled.span<TextProps>`
    display: inline-flex;
    align-items: center;
    ${(props) => color[props.color]}
    ${(props) => fontStyle[props.fontStyle]}
    ${(props) => hoverColor[props.hoverColor]}
    ${(props) => textDecoration[props.textDecoration]}
    ${(props) => setTextTransform(props.textTransfrom)}
`;
