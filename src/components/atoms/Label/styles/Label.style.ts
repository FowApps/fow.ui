import styled from 'styled-components';
import setVariant from './variant';
import { setSize } from './size';

type LabelProps = {
    color:
        | 'grey'
        | 'primary'
        | 'info'
        | 'success'
        | 'warning'
        | 'error'
        | 'pink'
        | 'orange'
        | 'green'
        | 'greenDark'
        | 'blue'
        | 'purple'
        | 'darkPurple';
    variant: 'outlined' | 'filled' | 'ghost';
    shape: 'rounded' | 'flat';
    size: 'small' | 'medium' | 'large';
    hasText: boolean;
};

export const StyledLabel = styled.div<LabelProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    //text-align: center;
    padding-right: ${(props) => props.theme.fow.spacing.xsmall};
    padding-left: ${(props) => props.theme.fow.spacing.xsmall};
    border-radius: ${(props) => (props.shape === 'flat' ? 0 : 0.1)}rem;
    color: white;
    font-weight: 500;
    font-style: normal;
    font-size: 1rem;
    line-height: 1rem;
    ${(props) => setVariant(props.color, props.variant)}
    ${(props) => setSize(props.size)}
`;
