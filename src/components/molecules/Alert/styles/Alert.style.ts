import styled from 'styled-components';
import { motion } from 'framer-motion';

import Body from '../../../atoms/Typography/Body';
import Subtitle from '../../../atoms/Typography/Subtitle';
import Icon from '../../../atoms/Icon';

type Types = 'info' | 'success' | 'error' | 'warning' | 'white';

type AlertProps = {
    type: Types;
};

export const StyledAlert = styled(motion.div)<AlertProps>`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    overflow: hidden;
    width: 100%;
    border: 1px solid ${(props) => props.theme.fow.colors[props.type].light};
    border-radius: 8px;
    background-color: ${(props) => props.theme.fow.colors[props.type].lighter};
    transform-origin: top;
    padding-inline: ${(props) => props.theme.fow.spacing.medium};
    padding-block: ${(props) => props.theme.fow.spacing.xsmall};

    h3 {
        margin-bottom: 0;
        color: ${(props) =>
            props.theme.fow.colors[props.type].darker} !important;
    }
`;

export const ContentWrapper = styled.div`
    flex: 1;
    padding-right: ${(props) => props.theme.fow.spacing.small};
`;

export const StyledTitle = styled(Subtitle)`
    margin-bottom: ${(props) => props.theme.fow.spacing.xsmall};
`;

export const StyledSubtitle = styled(Body)``;

export const StyledCloseIcon = styled(Icon)`
    cursor: pointer;
`;
