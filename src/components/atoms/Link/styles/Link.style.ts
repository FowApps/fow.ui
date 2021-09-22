import styled from 'styled-components';
import { setSize } from './size';
import setTextTransform from '../../../../utils/setTextTransform';
import hoverColor from './hoverColor';
import color from './color';

type LinkProps = {
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
    textTransfrom: 'lowercase' | 'capitalize' | 'uppercase';
    size: 'small' | 'medium' | 'large';
};

export const StyledLink = styled.a<LinkProps>`
    display: inline-flex;
    align-items: center;
    color: black;
    font-style: normal;
    ${(props) => hoverColor[props.hoverColor]}
    ${(props) => color[props.color]}
    ${(props) => setSize(props.size)}
    ${(props) => setTextTransform(props.textTransfrom)}
`;
