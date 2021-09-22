import styled from 'styled-components';
import { h1, h2, h3, h4, h5, h6 } from './variant';
import color from './color';

type AsProps = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
    as: AsProps;
    color:
        | 'primary'
        | 'secondary'
        | 'disabled'
        | 'white'
        | 'black'
        | 'success'
        | 'warning'
        | 'error';
};

const getElementType = (as: AsProps) => {
    switch (as) {
        case 'h1':
            return h1;
        case 'h2':
            return h2;
        case 'h3':
            return h3;
        case 'h4':
            return h4;
        case 'h5':
            return h5;
        case 'h6':
            return h6;
        default:
            return h1;
    }
};

export const StyledHeading = styled.h1<HeadingProps>`
    margin: 0;
    font-style: normal;
    ${(props) => color[props.color]}

    ${(props) => getElementType(props.as)}
`;
