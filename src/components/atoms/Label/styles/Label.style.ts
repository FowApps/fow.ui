import styled from 'styled-components';
import { setColor } from './color';

type LabelProps = {
    color: 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';
};

export const StyledLabel = styled.div<LabelProps>`
    display: inline-flex;
    align-items: center;
    height: 2.6rem;
    padding: 0.4rem 1.6rem;
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    font-style: normal;
    line-height: 1.8rem;
    text-transform: uppercase;

    ${(props) => setColor(props.color)}
`;
