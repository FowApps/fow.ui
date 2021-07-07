import React from 'react';
import { Story, Meta } from '@storybook/react';
import Col, { ColProps } from './Col';
import Container from '../Container';
import Row from '../Row';

export default {
    title: 'Atoms/Col',
    component: Col,
} as Meta;

const Template: Story<ColProps> = () => (
    <Container>
        <Row>
            <Col xs={12} sm={6} md={4} lg={2} xl={4} debug>
                xs-12
            </Col>
            <Col xs={12} sm={6} md={4} lg={8} xl={4} debug>
                xs-12
            </Col>
            <Col xs={12} sm={6} md={4} lg={2} xl={4} debug>
                xs-12
            </Col>
        </Row>
    </Container>
);

export const Default = Template.bind({});
Default.args = {
    debug: true,
    children: 'Lorem Ipsum Dolor',
};
