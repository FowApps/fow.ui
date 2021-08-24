/* eslint-disable import/no-cycle */
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { setDotType } from './dotType';

import { setAlignment } from './align';

type DotProps = {
    type: 'filled' | 'outlined';
    isActive: boolean;
};

type ContentProps = {
    align: 'left' | 'right' | 'center';
    hasIcon: boolean;
};

type WrapperProps = {
    align: 'left' | 'right' | 'center';
    hasIcon: boolean;
};

export const Content = styled.div<ContentProps>`
    position: relative;

    &:before {
        content: ' ';
        position: absolute;
        top: ${(props) => (props.hasIcon ? '4.8' : '2.4')}rem;
        width: 1px;
        height: ${(props) =>
            props.hasIcon ? 'calc(100% - 3.6rem)' : 'calc(100% - 1.2rem)'};
        background-color: ${(props) => props.theme.fow.colors.divider};
    }
`;

export const LineWrapper = styled(motion.div)<WrapperProps>`
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;

    ${(props) => setAlignment(props.hasIcon, props.align, Content)}
`;

export const Dot = styled.span<DotProps>`
    position: relative;
    width: 1.2rem;
    min-width: 1.2rem;
    height: 1.2rem;
    min-height: 1.2rem;
    border-radius: 50%;

    ${(props) => setDotType(props.type, props.isActive)}
`;

export const TimelineWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;
