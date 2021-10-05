/* eslint-disable jsx-a11y/no-static-element-interactions */
import { AnimatePresence } from 'framer-motion';
import React, { useRef } from 'react';

import useDisclosure from '../../../hooks/useDisclosure';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

import { Wrapper, Content } from './styles';

const contentVariants = {
    enter: {
        opacity: 1,
        rotateX: 0,
        transition: {
            duration: 0.3,
        },
        display: 'block',
    },
    exit: {
        opacity: 0,
        rotateX: -15,
        transition: {
            duration: 0.3,
            delay: 0.3,
        },
        transitionEnd: {
            display: 'none',
        },
    },
};

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
    fullWidth = false,
    width = 400,
    content,
    children,
}: DropdownProps): JSX.Element => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const { isOpen, close, toggle, open } = useDisclosure();
    useOnClickOutside(wrapperRef, close);

    return (
        <Wrapper ref={wrapperRef}>
            {React.cloneElement(children, {
                onClick: trigger === 'click' ? open : undefined,
                onMouseEnter: trigger === 'hover' ? open : undefined,
                onMouseLeave: trigger === 'hover' ? close : undefined,
                style: {
                    cursor: 'pointer',
                },
                ...children.props,
            })}
            <AnimatePresence>
                {isOpen && (
                    <Content
                        onClick={closeAfterClickContent ? toggle : open}
                        onMouseEnter={trigger === 'hover' ? open : undefined}
                        onMouseLeave={trigger === 'hover' ? close : undefined}
                        fullWidth={fullWidth}
                        width={width}
                        initial="exit"
                        exit="exit"
                        animate={isOpen ? 'enter' : 'exit'}
                        variants={contentVariants}>
                        {content}
                    </Content>
                )}
            </AnimatePresence>
        </Wrapper>
    );
};

export default Dropdown;
