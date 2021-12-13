import React from 'react';
import { Story, Meta } from '@storybook/react';
import Summary, { SummaryProps } from './Summary';

export default {
    title: 'Molecules/Summary',
    component: Summary,
} as Meta;

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

const Template: Story<SummaryProps> = (args) => {
    return (
        <Summary.List column={args.column}>
            {tempData.map((item, index) => (
                <Summary.Item
                    title={item.label}
                    field={item.field}
                    description={item.description}
                    key={index}
                />
            ))}
        </Summary.List>
    );
};

export const Default = Template.bind({});
Default.args = {
    column: 2,
};
