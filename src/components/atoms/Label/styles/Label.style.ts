import styled from 'styled-components';
import setVariant from './variant';
import { setSize } from './size';
import { setTextTransform } from '../../../../theme/textTransform';

type LabelProps = {
    color: 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';
    variant: 'outlined' | 'filled' | 'ghost';
    shape: 'rounded' | 'flat';
    textTransfrom: 'lowercase' | 'capitalize' | 'uppercase';
    size: 'small' | 'medium' | 'large';
};

export const StyledLabel = styled.div<LabelProps>`
    display: inline-flex;
    align-items: center;
    color: white;
    font-weight: 700;
    font-size: 1.2rem;
    font-style: normal;
    line-height: 2rem;
    border-radius: ${(props) => (props.shape === 'flat' ? 0 : 0.6)}rem;

    ${(props) => setVariant(props.color, props.variant)}
    ${(props) => setSize(props.size)}
    ${(props) => setTextTransform(props.textTransfrom)}
`;
