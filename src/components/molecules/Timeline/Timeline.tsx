import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

import BoxIcon from '../../atoms/BoxIcon';
import Space from '../../atoms/Space';

import { TimelineWrapper, LineWrapper, Dot, Content } from './styles';

export interface TimelineProps {
    /**
     * timeline item dot type
     */
    dotType?: 'filled' | 'outlined';
    /**
     * alignment of timeline
     */
    align?: 'right' | 'left' | 'center';
    /**
     * initial open index
     */
    children: React.ReactNode;
}

export interface TimelineItemProps {
    /**
     * active flag
     */
    isActive?: boolean;
    /**
     * icon type of box icon component
     */
    icon?: FontAwesomeIconProps['icon'];
    /**
     * timeline item dot type
     */
    dotType?: 'filled' | 'outlined';
    /**
     * alignment of timeline
     */
    index?: number;
    /**
     * alignment of timeline
     */
    align?: 'right' | 'left' | 'center';
    children: React.ReactNode;
}

const wrapperVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        x: -5,
        transition: {
            duration: 0.3,
        },
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
        },
    },
};

const Item = ({
    isActive = false,
    icon,
    align = 'right',
    index = 0,
    dotType = 'filled',
    children,
    ...rest
}: TimelineItemProps): JSX.Element => {
    const setWrapperReverse = () => {
        switch (align) {
            case 'right':
                return false;
            case 'left':
                return true;
            default:
                return index % 2 === 1;
        }
    };

    return (
        <LineWrapper
            align={align}
            hasIcon={!!icon}
            variants={itemVariants}
            {...rest}>
            <Space size="medium" align="start" reverse={setWrapperReverse()}>
                {icon ? (
                    <BoxIcon color="primary" icon={icon} />
                ) : (
                    <Dot type={dotType} isActive={isActive} />
                )}
                <Content align={align} hasIcon={!!icon}>
                    {children}
                </Content>
            </Space>
        </LineWrapper>
    );
};

const Timeline = ({
    dotType = 'filled',
    align = 'right',
    children,
}: TimelineProps): JSX.Element => {
    const items = React.Children.map(children, (child: any) =>
        child?.type?.displayName === 'Item' ? child : null,
    );
    return (
        <motion.div variants={wrapperVariants} initial="hidden" animate="show">
            <TimelineWrapper>
                {items.map(
                    ({ props: { icon, isActive, ...rest } }, idx: number) => (
                        <Item
                            dotType={dotType}
                            index={idx}
                            align={align}
                            icon={icon}
                            isActive={isActive}
                            {...rest}>
                            {rest.children}
                        </Item>
                    ),
                )}
            </TimelineWrapper>
        </motion.div>
    );
};
Timeline.displayName = 'Timeline';
Item.displayName = 'Item';

Timeline.Item = Item;

export default Timeline;
