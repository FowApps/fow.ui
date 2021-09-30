import styled from 'styled-components';
import setVariant from './variant';
import { setSize } from './size';

type LabelProps = {
    color: 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';
    variant: 'outlined' | 'filled' | 'ghost';
    shape: 'rounded' | 'flat';
    size: 'small' | 'medium' | 'large';
};

export const StyledLabel = styled.div<LabelProps>`
    display: inline-flex;
    align-items: center;
    padding-right: ${(props) => props.theme.fow.spacing.small};
    padding-left: ${(props) => props.theme.fow.spacing.small};
    border-radius: ${(props) => (props.shape === 'flat' ? 0 : 0.6)}rem;
    color: white;
    font-weight: 700;
    font-style: normal;
    font-size: 1.2rem;
    line-height: 2rem;
    ${(props) => setVariant(props.color, props.variant)}
    ${(props) => setSize(props.size)}
`;
