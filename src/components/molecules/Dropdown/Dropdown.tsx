/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { PositioningPortal } from '@codastic/react-positioning-portal';
import { Transition } from 'react-transition-group';

import useDisclosure from '../../../hooks/useDisclosure';

import { Content } from './styles';

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
     * flag for close dropdown after click content
     */
    closeAfterClickContent?: boolean;
    /**
     * flag for inline or fluid content
     */
    fullWidth?: boolean;
    width?: number | string;
    children: React.DetailedReactHTMLElement<any, HTMLElement>;
}

const Dropdown = ({
    trigger = 'click',
    closeAfterClickContent = false,
    content,
    children,
}: DropdownProps): JSX.Element => {
    const { isOpen, close, toggle, open } = useDisclosure();

    return (
        <PositioningPortal
            portalElement={<div style={{ zIndex: 9999 }} />}
            isOpen={isOpen}
            onOpen={open}
            onShouldClose={close}
            onClose={close}
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
                            onClick={closeAfterClickContent ? toggle : open}
                            onMouseEnter={
                                trigger === 'hover' ? open : undefined
                            }
                            onMouseLeave={
                                trigger === 'hover' ? close : undefined
                            }>
                            {content}
                        </Content>
                    )}
                </Transition>
            )}>
            {React.cloneElement(children, {
                onClick: trigger === 'click' ? toggle : undefined,
                onMouseEnter: trigger === 'hover' ? open : undefined,
                style: {
                    cursor: 'pointer',
                },
                ...children.props,
            })}
        </PositioningPortal>
    );
};

export default Dropdown;
