import React from 'react';
import { theme } from '../../../theme/theme';
import Icon from '../../atoms/Icon';
import { SummaryCardItem, Wrapper, IconWrapper } from './styles';
import Tooltip from '../../atoms/Tooltip';

const tempData = [
    {
        type: 'name',
        label: 'Name',
        field: 'Name is here',
        description: 'Name field is here.',
    },
    {
        type: 'surname',
        label: 'Surname',
        field: 'Surname is here',
    },
    {
        type: 'phone',
        label: 'Phone',
        field: 'Phone is here',
        description: 'Phone field is here.',
    },
    {
        type: 'email',
        label: 'E-mail',
        field: 'Email is here',
        description: 'Email field is here.',
    },
    {
        type: 'contact',
        label: 'Contact',
        field: 'Contact is here',
    },
    {
        type: 'accountName',
        label: 'Account Name',
        field: 'Account Name is here',
    },
    {
        type: 'opportunityTitle',
        label: 'Opportunity Title',
        field: 'Opportunity Title is here',
    },
    {
        type: 'opportunityPrice',
        label: 'Opportunity Price',
        field: '50.000 TL',
    },
    {
        type: 'updatedTitle1',
        label: 'Updated Title 1',
        field: 'New Data',
    },
    {
        type: 'updatedTitle2',
        label: 'Updated Title 2',
        field: 'New Data',
    },
    {
        type: 'updatedTitle3',
        label: 'Updated Title 3',
        field: 'New Data',
    },
];

const Item = ({ item }): JSX.Element => (
    <SummaryCardItem>
        <b>
            {item.label}
            {item.description && (
                <Tooltip
                    placement="top"
                    overlay={<span>{item.description}</span>}>
                    <IconWrapper>
                        <Icon
                            icon={['far', 'question-circle']}
                            color={theme?.fow.colors.greyDark.lighter}
                        />
                    </IconWrapper>
                </Tooltip>
            )}
        </b>
        <span>{item.field}</span>
    </SummaryCardItem>
);

const Summary = (): JSX.Element => (
    <Wrapper column={2}>
        {tempData.map((item, index) => (
            <Item item={item} key={index} />
        ))}
    </Wrapper>
);

export default Summary;
