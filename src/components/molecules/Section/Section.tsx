import React from 'react';
import Heading from '../../atoms/Typography/Heading';

import { Body, Header, Wrapper } from './styles';

const variants = {
    hide: {
        y: 5,
        opacity: 0,
    },

    enter: {
        y: 0,
        opacity: 1,
    },

    exit: {
        opacity: 0,
        y: 5,
    },
};

export interface SectionProps {
    /**
     * title of section
     */
    title?: string;
    /**
     * action slot for buttons ect.
     */
    actions?: React.ReactNode | React.ReactNode[];
    children: React.ReactChildren;
}

const Section = ({ title, actions, children }: SectionProps) => (
    <Wrapper variants={variants} initial="hide" animate="enter" exit="exit">
        <Header>
            <Heading as="h6">{title}</Heading>
            <div>{actions}</div>
        </Header>
        <Body>{children}</Body>
    </Wrapper>
);

export default Section;
