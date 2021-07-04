import React from 'react';
import { Message } from './styles';

export interface HelloWorldProps {
    /**
     * Prop description here!!!
     * Displayed message text
     */
    message: string;
    /**
     * Prop description here!!!
     * show hide flag
     */
    isActive?: boolean;
}

const HelloWorld = ({
    isActive = true,
    message = 'This is default message',
    ...rest
}: HelloWorldProps): JSX.Element => (
    <Message isActive={isActive} {...rest}>
        {message}
    </Message>
);

export default HelloWorld;
