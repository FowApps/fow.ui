import React from 'react';
import { theme } from '../../../theme/theme';
import Icon from '../../atoms/Icon';
import { SummaryCardItem, IconWrapper } from './styles';
import Tooltip from '../../atoms/Tooltip';
import Space from '../../atoms/Space';
import Subtitle from '../../atoms/Typography/Subtitle';
import Body from '../../atoms/Typography/Body';

export interface SummaryProps {
    title: string;
    field: string;
    description?: string;
}

const SummaryItemIcon = ({ description }): JSX.Element => (
    <Tooltip placement="top" overlay={<span>{description}</span>}>
        <IconWrapper align="center" justify="center">
            <Icon
                icon={['far', 'question-circle']}
                color={theme.fow.colors.text.disabled}
            />
        </IconWrapper>
    </Tooltip>
);
const SummaryItemBody = ({ field }): JSX.Element => (
    <Body level={1} color="secondary">
        {field}
    </Body>
);

const SummaryItem = ({
    title,
    field,
    description,
}: SummaryProps): JSX.Element => (
    <SummaryCardItem>
        <Space align="center" size="xsmall">
            <Subtitle level={2}>
                <b>{title}</b>
            </Subtitle>
            {description && <SummaryItemIcon description={description} />}
        </Space>
        <SummaryItemBody field={field} />
    </SummaryCardItem>
);

const Summary = ({ title, field, description }: SummaryProps): JSX.Element => (
    <>
        <SummaryItem title={title} field={field} description={description} />
    </>
);

export default Summary;
