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
export interface SummaryProps {
    title: string;
    field: string;
    description?: string;
    column?: number;
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

const Item = ({ title, field, description }: SummaryProps): JSX.Element => (
    <SummaryCardItem>
        <Space align="center" size="xsmall">
            <Subtitle level={2}>{title}</Subtitle>
            {description && <SummaryItemIcon description={description} />}
        </Space>
        <SummaryItemBody field={field} />
    </SummaryCardItem>
);

const Summary = ({ title, field, description }: SummaryProps): JSX.Element => (
    <SummaryWrapper>
        <Item title={title} field={field} description={description} />
    </SummaryWrapper>
);

Summary.displayName = 'Summary';
Item.displayName = 'Item';

Summary.Item = Item;
Summary.List = SummaryWrapper;

export default Summary;
