import styled from 'styled-components';
import setVariant from './variant';
import { setSize } from './size';

type BadgeProps = {
    color: 'primary' | 'info' | 'success' | 'warning' | 'error' | 'grey';
    variant: 'outlined' | 'filled';
    shape: 'circle' | 'rounded';
    size: 'small' | 'medium' | 'large';
    textLength: number | 1;
};

export const StyledBadge = styled.div<BadgeProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${(props) => (props.shape === 'rounded' ? 0.4 : 1)}rem;
    padding: ${(props) => (props.textLength > 1 ? '0 0.6' : 0)}rem;
    ${(props) => setVariant(props.color, props.variant)}
    ${(props) => setSize(props.size)}
`;
