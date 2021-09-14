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
    font-weight: normal;
    font-style: normal;
    font-size: 1rem;
    line-height: 1.8rem;

    ${(props) => color[props.color]}
`;
