import styled from 'styled-components';
import setVariant from './variant';
import { setSize } from './size';

type LabelProps = {
    color: 'pink' | 'orange' | 'green' | 'blue' | 'purple' | 'darkPurple';
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
    //padding-top: 0.1rem;
    border-radius: ${(props) => (props.shape === 'flat' ? 0 : 0.2)}rem;
    color: white;
    font-weight: 500;
    font-style: normal;
    font-size: 1.2rem;
    line-height: 1.2rem;
    ${(props) => setVariant(props.color, props.variant)}
    ${(props) => setSize(props.size)}
`;
