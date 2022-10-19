import styled from 'styled-components';
import { StyledSummaryCardProps } from '..';
import Icon from '../../../atoms/Icon/Icon';

export interface SummaryItemProps {
    hidden?: boolean;
}

export const SummaryWrapper = styled.div<StyledSummaryCardProps>`
    column-count: ${(props) => (props.column ? props.column : 1)};
    column-gap: 0;
    width: 100%;
`;

export const IconWrapper = styled(Icon)`
    width: 14px !important;
    height: 14px;
`;
export const SummaryCardItem = styled.div<SummaryItemProps>`
    display: ${(props) => (props.hidden ? 'none' : 'inline-block')};
    width: 100%;
    margin-bottom: ${(props) => props.theme.fow.spacing.xsmall};
    padding-right: ${(props) => props.theme.fow.spacing.xsmall};
`;
