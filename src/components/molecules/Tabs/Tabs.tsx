import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Subtitle from '../../atoms/Typography/Body/Body';
import Space from '../../atoms/Space';

import {
    Container,
    Surface,
    Item as TabItem,
    TabContentHolder,
    TabContent,
    TabPane,
    IconWrapper,
    Wrapper,
} from './styles';

export interface TabsProps {
    /**
     * fluid flag for tab items
     */
    fluid?: boolean;
    /**
     * initial active tab index
     */
    defaultIndex?: number;
    /**
     * handle click tab item
     */
    onTabClick?: (index: number) => void;
    /**
     * direction of tab items
     */
    direction?: 'vertical' | 'horizontal';
    /**
     * flag for unmount inactive tabs from tree
     */
    destroyInactive?: boolean;
    children: React.ReactNode[] | React.ReactNode;
}

export interface TabItemProps {
    /**
     * icon of tab item
     */
    icon?: React.ReactNode;
    /**
     * index of tab item
     */
    index: number;
    /**
     * label of tab item
     */
    label?: string;
    /**
     * disable flag
     */
    disabled?: boolean;
    children: React.ReactNode;
}

const variants = {
    active: {
        display: 'block',
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
    inactive: {
        display: 'none',
        opacity: 0,
        y: 1,
        transition: {
            duration: 0.5,
        },
    },
};

const Tabs = ({
    fluid = false,
    defaultIndex,
    onTabClick,
    direction = 'horizontal',
    destroyInactive = false,
    children,
}: TabsProps): JSX.Element => {
    const [bindIndex, setBindIndex] = useState(() => defaultIndex);

    useEffect(() => {
        setBindIndex(defaultIndex);
    }, [defaultIndex]);

    const changeTab = (newIndex: number) => {
        if (bindIndex !== newIndex) {
            if (typeof onTabClick === 'function') onTabClick(newIndex);
            setBindIndex(newIndex);
        }
    };

    const items = React.Children.map(children, (child: any) =>
        child?.type?.displayName === 'TabItem' ? child : null,
    );

    const renderTabContent = (props, directionProp) => (
        <TabPane
            {...props}
            isActive={bindIndex === props.index}
            key={`tab-content-${props.index}`}
            initial="inactive"
            animate={bindIndex === props.index ? 'active' : 'inactive'}
            transition={{ duration: 0.3 }}
            variants={variants}
            direction={directionProp}
        />
    );

    return (
        <Container direction={direction}>
            <Surface direction={direction}>
                {items
                    .filter(Boolean)
                    .map(({ props: { index, label, icon, disabled } }) => (
                        <TabItem
                            fluid={fluid}
                            direction={direction}
                            isActive={bindIndex === index}
                            key={`tab-btn-${index}`}
                            onClick={() => !disabled && changeTab(index)}
                            disabled={disabled}>
                            <Space>
                                {icon && (
                                    <IconWrapper isActive={bindIndex === index}>
                                        {icon}
                                    </IconWrapper>
                                )}
                                {label && (
                                    <Subtitle
                                        level={2}
                                        color={
                                            bindIndex === index
                                                ? 'primary'
                                                : 'black'
                                        }>
                                        {label}
                                    </Subtitle>
                                )}
                            </Space>
                        </TabItem>
                    ))}
            </Surface>
            <TabContentHolder direction={direction}>
                <TabContent direction={direction}>
                    <AnimatePresence>
                        {items.map(({ props }) =>
                            destroyInactive
                                ? bindIndex === props.index &&
                                  renderTabContent(props, direction)
                                : renderTabContent(props, direction),
                        )}
                    </AnimatePresence>
                </TabContent>
            </TabContentHolder>
        </Container>
    );
};

const Item = ({ icon, label, index, disabled }: TabItemProps) => (
    <Wrapper icon={icon} label={label} index={index} disabled={disabled} />
);

Item.displayName = 'TabItem';
Tabs.Item = Item;

export default Tabs;
