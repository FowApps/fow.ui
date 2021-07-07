import styled from 'styled-components';
import color from './color';

type CaptionProps = {
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

export const StyledCaption = styled.p<CaptionProps>`
    font-style: normal;
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-weight: 500;

    ${(props) => color[props.color]}
`;
