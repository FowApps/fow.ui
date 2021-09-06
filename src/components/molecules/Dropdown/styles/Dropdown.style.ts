import styled from 'styled-components';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ContentProps extends HTMLMotionProps<'div'> {
    topOffset: ((newNode: any) => void) | null;
}

export const Wrapper = styled(motion.div)`
    position: relative;
`;

export const Content = styled(motion.div)<ContentProps>`
    position: absolute;
    top: ${(props) => props.topOffset + props.theme.fow.spacing.small}px;
    right: 0;
`;
