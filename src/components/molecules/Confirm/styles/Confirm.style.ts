import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Overlay = styled(motion.div)`
    position: fixed;
    z-index: 1072;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 10rem;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0.4;
    inset: 0;
`;

export const Card = styled(motion.div)`
    width: 40rem;
    padding: ${(props) => props.theme.fow.spacing.large};
    border-radius: 8px;
    background-color: ${(props) => props.theme.fow.colors.common.white};
    box-shadow: ${(props) => props.theme.fow.shadows.z16};
`;

export const IconWrapper = styled.div`
    margin-right: ${(props) => props.theme.fow.spacing.small};
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: ${(props) => props.theme.fow.spacing.small};
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${(props) => props.theme.fow.spacing.xlarge};
`;
