import styled from 'styled-components';
import setVariant from './variant';

type LabelProps = {
    color: 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';
    variant: 'outlined' | 'filled' | 'ghost';
    marketplace: boolean;
};

export const StyledLabel = styled.div<LabelProps>`
    display: inline-flex;
    align-items: center;
    height: ${(props) => (props.marketplace ? 3.6 : 2.2)}rem;
    padding: ${(props) =>
        props.marketplace ? '0.8rem 1.6rem' : '0.2rem 0.8rem'};
    color: white;
    font-weight: 700;
    font-size: 1.2rem;
    font-style: normal;
    line-height: 2rem;
    text-transform: ${(props) =>
        props.marketplace ? 'uppercase' : 'capitalize'};
    border-radius: ${(props) => (props.marketplace ? 0 : 0.6)}rem;

    ${(props) => setVariant(props.color, props.variant)}
`;
