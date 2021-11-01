/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { PositioningPortal } from '@codastic/react-positioning-portal';
import { Transition } from 'react-transition-group';

import useDisclosure from '../../../hooks/useDisclosure';

import { Content } from './styles';

interface RenderProps {
    isOpen: boolean;
    close: () => void;
    open: () => void;
}

export interface DropdownProps {
    /**
     * trigger event
     */
    trigger?: 'click' | 'hover';
    /**
     * dropdown menu content
     */
    content: React.ReactNode;
    /**
     * flag for inline or fluid content
     */
    fullWidth?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    initialOpen?: boolean;
    children:
        | React.DetailedReactHTMLElement<any, HTMLElement>
        | ((api: RenderProps) => React.ReactNode);
}

const Dropdown = (
    {
        trigger = 'click',
        content,
        onOpen,
        onClose,
        children,
        initialOpen = false,
    }: DropdownProps,
    ref: any,
): JSX.Element => {
    const { isOpen, close, toggle, open } = useDisclosure(initialOpen);

    return (
        <PositioningPortal
            portalElement={<div style={{ zIndex: 9999 }} />}
            isOpen={isOpen}
            onOpen={() => {
                open();
                onOpen?.();
            }}
            onShouldClose={close}
            onClose={() => {
                close();
                onClose?.();
            }}
            portalContent={({
                isOpen: isPortalOpen,
                isPositioned,
                transitionStarted,
                transitionEnded,
            }) => (
                <Transition
                    addEndListener={(node, done) => {
                        node.addEventListener('transitionend', done, false);
                    }}
                    in={isPortalOpen && isPositioned}
                    onEnter={transitionStarted}
                    onExited={transitionEnded}>
                    {(state) => (
                        <Content
                            state={state}
                            onMouseEnter={
                                trigger === 'hover' ? open : undefined
                            }
                            onMouseLeave={
                                trigger === 'hover' ? close : undefined
                            }>
                            {typeof content === 'function'
                                ? content(close)
                                : content}
                        </Content>
                    )}
                </Transition>
            )}>
            <div
                ref={ref}
                onClick={() => {
                    if (trigger === 'click') toggle();
                }}
                onMouseEnter={() => {
                    if (trigger === 'hover') open();
                }}
                style={{
                    cursor: 'pointer',
                }}>
                {typeof children === 'function'
                    ? children({ isOpen, close, open })
                    : children}
            </div>
        </PositioningPortal>
    );
};

export default React.forwardRef(Dropdown);
