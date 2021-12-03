import React, { useState } from 'react';
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
     * click event on trigger
     */
    onItemClick: (index: number) => void;
    children: React.ReactNode | React.ReactNode[];
}

export interface ItemTitleActionProps {
    id: number;
    message: string;
}
export interface ItemTitleProps {
    label?: string;
    action?: ItemTitleActionProps[];
}

export interface AccordionItemProps {
    /**
     * label of trigger
     */
    label?: string;
    isCollapsed?: boolean;
    handleClick?: () => void;
    /**
     * index of trigger(must uniq like key)
     */
    index: number;
    children: React.ReactNode;
    data: ItemTitleProps;
}

const TitleDescription = ({ action }: ItemTitleProps) => (
    <HeaderWrapper>
        <Body level={1} color="secondary">
            {action && (
                <ul>
                    {action.map((item) => (
                        <li>{item.message}</li>
                    ))}
                </ul>
            )}
        </Body>
    </HeaderWrapper>
);

const Item = ({
    isCollapsed,
    handleClick,
    data,
    children,
}: AccordionItemProps) => (
    <>
        <Trigger isCollapsed={isCollapsed} role="button" onClick={handleClick}>
            <Space inline={false} align="center" direction="horizontal">
                {isCollapsed ? (
                    <IconWrapper>
                        <Icon
                            icon="chevron-down"
                            color={theme.fow.colors.greyDark.light}
                        />
                    </IconWrapper>
                ) : (
                    <IconWrapper>
                        <Icon
                            icon="chevron-up"
                            color={theme.fow.colors.greyDark.light}
                        />
                    </IconWrapper>
                )}
                <Subtitle level={1}>{data.label}</Subtitle>
            </Space>
            {data.action && <TitleDescription action={data.action} />}
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
        child?.type?.displayName === 'Item' ? child : null,
    );

    return (
        <Wrapper bordered={bordered}>
            {items.map(({ props }) => (
                <Item
                    key={`accordion-item-${props.index}`}
                    isCollapsed={bindIndex !== props.index}
                    label={props.label}
                    handleClick={() => changeItem(props.index)}
                    index={props.index}
                    data={props.data}>
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
