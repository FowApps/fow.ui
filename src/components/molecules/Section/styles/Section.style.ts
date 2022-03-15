import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
    background-color: ${(props) => props.theme.fow.colors.common.white};
    border: 1px solid
        ${(props) => props.theme.fow.colors.greyLight.transparent48};
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 40px;
    border-bottom: 2px solid
        ${(props) => props.theme.fow.colors.greyLight.transparent48};
    background-color: ${(props) => props.theme.fow.colors.greyLight.light};
`;

export const Body = styled.div`
    padding: 16px 40px;
`;
