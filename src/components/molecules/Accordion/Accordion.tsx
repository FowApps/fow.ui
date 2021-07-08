import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Space from '../../atoms/Space';
import Heading from '../../atoms/Heading';
import Icon from '../../atoms/Icon';

import { Wrapper, Trigger, Content } from './styles';

export interface AccordionProps {
    /**
     * initial open index
     */
    defaultIndex: number;
    /**
     * show/hide wrapper border
     */
    bordered?: boolean;
    /**
     * click event on trigger
     */
    onItemClick: (index: number) => void;
    children: React.ReactNode | React.ReactNode[];
}

export interface AccordionItemProps {
    /**
     * label of trigger
     */
    label: string;
    /**
     * icon of trigger
     */
    icon?: React.ReactNode;
    isCollapsed?: boolean;
    handleClick?: () => void;
    /**
     * index of trigger(must uniq like key)
     */
    index: number;
    children: React.ReactNode;
}

const Item = ({
    icon,
    label,
    isCollapsed,
    handleClick,
    children,
}: AccordionItemProps) => (
    <>
        <Trigger isCollapsed={isCollapsed} role="button" onClick={handleClick}>
            <Space>
                {icon}
                <Heading as="h6">{label}</Heading>
            </Space>
            {isCollapsed ? (
                <Icon icon="chevron-down" />
            ) : (
                <Icon icon="chevron-up" />
            )}
        </Trigger>
        <AnimatePresence>
            {!isCollapsed && (
                <Content
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                    }}>
                    {children}
                </Content>
            )}
        </AnimatePresence>
    </>
);

const Accordion = ({
    defaultIndex,
    bordered = true,
    onItemClick,
    children,
}: AccordionProps): JSX.Element => {
    const [bindIndex, setBindIndex] = useState(defaultIndex);

    const changeItem = (itemIndex: number) => {
        if (typeof onItemClick === 'function') onItemClick(itemIndex);
        if (itemIndex !== bindIndex) {
            setBindIndex(itemIndex);
        } else {
            setBindIndex(-1);
        }
    };

    const items = React.Children.map(children, (child: any) =>
        child.type.name === 'Item' ? child : null,
    );

    return (
        <Wrapper bordered={bordered}>
            {items.map(({ props }) => (
                <Item
                    icon={props.icon}
                    key={`accordion-item-${props.index}`}
                    isCollapsed={bindIndex !== props.index}
                    label={props.label}
                    handleClick={() => changeItem(props.index)}
                    index={props.index}>
                    {props.children}
                </Item>
            ))}
        </Wrapper>
    );
};

Accordion.Item = Item;

export default Accordion;
