import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Space from '../../atoms/Space';
import Subtitle from '../../atoms/Typography/Subtitle';
import Icon from '../../atoms/Icon';

import {
    Wrapper,
    Trigger,
    Content,
    IconWrapper,
    HeaderWrapper,
} from './styles';
import { theme } from '../../../theme/theme';
import Body from '../../atoms/Typography/Body';

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
     * allOpen/allClose
     */
    allOpen?: boolean;
    /**
     * borderRadius
     */
    borderRadius?: number;
    /**
     * click event on trigger
     */
    onItemClick: (index: number) => void;
    /**
     * set accordion arrow position
     */
    arrowPosition?: 'left' | 'right';
    children: React.ReactNode | React.ReactNode[];
}

export interface ItemTitleProps {
    subtitle?: React.ReactNode;
    arrowPosition?: 'left' | 'right';
}
export interface AccordionItemProps {
    title?: string;
    contentTitle?: React.ReactNode;
    subtitle?: React.ReactNode;
    extra?: React.ReactNode;
    isCollapsed?: boolean;
    handleClick?: () => void;
    index: number;
    arrowPosition?: 'left' | 'right';
    children: React.ReactNode;
}

const TitleDescription = ({ subtitle, arrowPosition }: ItemTitleProps) => (
    <HeaderWrapper arrowPosition={arrowPosition}>
        <Body level={1} color="secondary">
            {subtitle}
        </Body>
    </HeaderWrapper>
);

const Item = ({
    isCollapsed,
    handleClick,
    title,
    contentTitle,
    subtitle,
    arrowPosition,
    children,
    extra,
}: AccordionItemProps) => (
    <>
        <Trigger isCollapsed={isCollapsed} role="button" onClick={handleClick}>
            <Space
                inline={false}
                align="center"
                direction="horizontal"
                justify={
                    arrowPosition === 'right' ? 'space-between' : 'flex-start'
                }
                reverse={arrowPosition === 'right'}>
                {isCollapsed ? (
                    <IconWrapper arrowPosition={arrowPosition}>
                        <Icon
                            icon="chevron-down"
                            color={theme.fow.colors.greyDark.light}
                        />
                    </IconWrapper>
                ) : (
                    <IconWrapper arrowPosition={arrowPosition}>
                        <Icon
                            icon="chevron-up"
                            color={theme.fow.colors.greyDark.light}
                        />
                    </IconWrapper>
                )}

                {contentTitle || (
                    <Space
                        inline={false}
                        align="center"
                        direction="horizontal"
                        justify="space-between">
                        <Subtitle level={1}>{title}</Subtitle>
                        {extra && <>{extra}</>}
                    </Space>
                )}
            </Space>
            {subtitle && (
                <TitleDescription
                    subtitle={subtitle}
                    arrowPosition={arrowPosition}
                />
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
    borderRadius = 0,
    onItemClick,
    arrowPosition = 'left',
    children,
    allOpen = false,
}: AccordionProps): JSX.Element => {
    const [bindIndex, setBindIndex] = useState(() => defaultIndex);

    useEffect(() => {
        setBindIndex(defaultIndex);
    }, [defaultIndex]);

    const changeItem = (itemIndex: number) => {
        if (typeof onItemClick === 'function') onItemClick(itemIndex);
        if (itemIndex !== bindIndex) {
            setBindIndex(itemIndex);
        } else {
            setBindIndex(-1);
        }
    };

    const items = React.Children.map(children, (child: any) =>
        child?.type?.displayName === 'Item' ? child : null,
    );

    return (
        <Wrapper bordered={bordered} borderRadius={borderRadius}>
            {items.map(({ props }) => (
                <Item
                    key={`accordion-item-${props.index}`}
                    isCollapsed={allOpen ? false : bindIndex !== props.index}
                    title={props.title}
                    contentTitle={props?.contentTitle}
                    extra={props.extra}
                    handleClick={() => changeItem(props.index)}
                    index={props.index}
                    arrowPosition={arrowPosition}
                    subtitle={props.subtitle}>
                    {props.children}
                </Item>
            ))}
        </Wrapper>
    );
};
Accordion.displayName = 'Accordion';
Item.displayName = 'Item';

Accordion.Item = Item;

export default Accordion;
