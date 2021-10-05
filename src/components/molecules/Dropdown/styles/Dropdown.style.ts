import styled from 'styled-components';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ContentProps extends HTMLMotionProps<'div'> {
    fullWidth: boolean;
    width: number | string;
}

export const Wrapper = styled(motion.div)`
    position: relative;
`;

export const Content = styled(motion.div)<ContentProps>`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    width: ${(props) => (props.fullWidth ? '100%' : `${props.width}px`)};
`;
