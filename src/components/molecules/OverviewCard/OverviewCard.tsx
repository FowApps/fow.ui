import React from 'react';
import Space from '../../atoms/Space';
import Body from '../../atoms/Typography/Body';
import Subtitle from '../../atoms/Typography/Subtitle';
import Overline from '../../atoms/Typography/Overline';

import { Wrapper, Card } from './styles';

export interface OverviewCardProps {
    /**
     * title of card
     */
    title?: string;
    /**
     * subtitle of image
     */
    subtitle?: string;
    /**
     * subtitle of image
     */
    children?: React.ReactNode;
}

const OverviewCard = ({
    title,
    subtitle,
    children,
}: OverviewCardProps): JSX.Element => (
    <Wrapper>
        <Space size="none" direction="vertical" align="start" inline={false}>
            <Space size="xxsmall" align="end">
                <Subtitle level={2} color="secondary">
                    {title}
                </Subtitle>
                <Overline color="disabled">{subtitle}</Overline>
            </Space>
            <Card>
                <Body level={1} color="disabled">
                    {children}
                </Body>
            </Card>
        </Space>
    </Wrapper>
);

export default OverviewCard;
