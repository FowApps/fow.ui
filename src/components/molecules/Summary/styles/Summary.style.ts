import styled from 'styled-components';
import { motion } from 'framer-motion';

type StyledSummaryCardProps = {
    column?: number;
};

export const Wrapper = styled(motion.div)<StyledSummaryCardProps>`
    column-count: ${(props) => (props.column ? props.column : 1)};
    column-gap: 0;
    width: 100%;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    svg {
        width: 14px !important;
        height: 14px;
    }
`;
export const SummaryCardItem = styled(motion.div)`
    display: inline-block;
    width: 100%;
    margin-bottom: 8px;
    b {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.fow.colors.greyDark.main};
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
    }
    span {
        display: block;
        width: 100%;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        color: ${(props) => props.theme.fow.colors.greyDark.light};
    }
`;
