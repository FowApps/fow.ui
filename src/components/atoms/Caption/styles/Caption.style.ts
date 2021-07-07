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
    margin: 0;
    font-weight: 500;
    font-size: 1.2rem;
    font-style: normal;
    line-height: 1.8rem;

    ${(props) => color[props.color]}
`;
