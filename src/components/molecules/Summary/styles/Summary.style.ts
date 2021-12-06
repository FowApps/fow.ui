import styled from 'styled-components';
import Space from '../../../atoms/Space/Space';

type StyledSummaryCardProps = {
    column?: number;
};

export const Wrapper = styled.div<StyledSummaryCardProps>`
    column-count: ${(props) => (props.column ? props.column : 1)};
    column-gap: 0;
    width: 100%;
`;

export const IconWrapper = styled(Space)`
    svg {
        width: 14px !important;
        height: 14px;
    }
`;
export const SummaryCardItem = styled.div`
    display: inline-block;
    width: 100%;
    margin-bottom: ${(props) => props.theme.fow.spacing.xsmall};
    b {
        font-weight: inherit;
        color: ${(props) => props.theme.fow.colors.greyDark.main};
    }
`;
