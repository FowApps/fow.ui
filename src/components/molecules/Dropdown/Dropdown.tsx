/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef } from 'react';

import useDisclosure from '../../../hooks/useDisclosure';
import useStateRef from '../../../hooks/useStateRef';
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
    children: React.ReactNode;
}

const Dropdown = ({ trigger = 'click', content, children }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [triggerHeight, setRef] = useStateRef(
        (node: HTMLElement) => node?.clientHeight || 0,
    );

    const { isOpen, close, toggle, open } = useDisclosure();
    useOnClickOutside(wrapperRef, close);

    const handleMouseEnter = () => {
        if (trigger === 'hover') {
            open();
        }
    };

    const handleMouseExit = () => {
        if (trigger === 'hover') {
            close();
        }
    };

    return (
        <Wrapper ref={wrapperRef}>
            {React.cloneElement(children, {
                onClick: trigger === 'click' && toggle,
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseExit,
                ref: setRef,
                ...children.props,
            })}
            <Content
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseExit}
                topOffset={triggerHeight}
                initial="exit"
                animate={isOpen ? 'enter' : 'exit'}
                variants={contentVariants}>
                {content}
            </Content>
        </Wrapper>
    );
};

export default Dropdown;
