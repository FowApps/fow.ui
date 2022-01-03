import React from 'react';
import { theme } from '../../../theme/theme';
import { SummaryCardItem, IconWrapper, SummaryWrapper } from './styles';
import Tooltip from '../../atoms/Tooltip';
import Space from '../../atoms/Space';
import Subtitle from '../../atoms/Typography/Subtitle';
import Body from '../../atoms/Typography/Body';

export interface StyledSummaryCardProps {
    column?: number;
}
export interface SummaryItemProps {
    title: string;
    field: string;
    description?: string;
    column?: number;
    hidden?: boolean;
}

const SummaryItemIcon = ({ description }): JSX.Element => (
    <Tooltip placement="top" overlay={<span>{description}</span>}>
        <IconWrapper
            icon={['far', 'question-circle']}
            color={theme.fow.colors.text.disabled}
        />
    </Tooltip>
);
const SummaryItemBody = ({ field }): JSX.Element => (
    <Body level={1} color="secondary">
        {field}
    </Body>
);

const Item = ({
    title,
    field,
    description,
    hidden = false,
}: SummaryItemProps): JSX.Element => (
    <SummaryCardItem hidden={hidden}>
        <Space align="center" size="xsmall">
            <Subtitle level={2}>{title}</Subtitle>
            {description && <SummaryItemIcon description={description} />}
        </Space>
        <SummaryItemBody field={field} />
    </SummaryCardItem>
);

SummaryWrapper.displayName = 'List';
Item.displayName = 'Item';

const Summary = {
    Item,
    List: SummaryWrapper,
};

export default Summary;
