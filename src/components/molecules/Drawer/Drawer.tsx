/* eslint-disable react-hooks/exhaustive-deps */
import React, {
    useRef,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    forwardRef,
    useImperativeHandle,
} from 'react';
import RcDrawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';

import useForceUpdate from '../../../hooks/useForceUpdate';
import Button, { ButtonProps } from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import Space from '../../atoms/Space';
import Heading from '../../atoms/Typography/Heading';

import getDrawerStyles from './utils/getDrawerStyles';

import { Container, Header, Body, Footer } from './styles';

type DrawerRef = {
    push(): void;
    pull(): void;
};

const DrawerContext = createContext<DrawerRef | null>(null);

export interface PushState {
    distance: string | number;
}

export type PlacementTypes = 'left' | 'top' | 'right' | 'bottom';

export interface DrawerProps {
    /**
     * open/close state
     */
    isOpen?: boolean;
    /**
     * show close icon
     */
    isClosable?: boolean;
    /**
     * initial open/close state
     */
    defaultOpen?: boolean;
    /**
     * show overlay backdrop mask
     */
    showMask?: boolean;
    /**
     * title of drawer
     */
    title?: React.ReactNode;
    /**
     * footer of drawer
     */
    footer?: React.ReactNode;
    /**
     * clicking on the mask (area outside the Drawer) to close the Drawer or not.
     */
    maskClosable?: boolean;
    /**
     * placement of drawer
     */
    placement?: PlacementTypes;
    /**
     * width of drawer
     */
    width?: number | string;
    /**
     * Nested drawers push behavior
     */
    push?: boolean | PushState;
    /**
     * css styles
     */
    style?: React.CSSProperties;
    /**
     * body css styles
     */
    bodyStyles?: React.CSSProperties;
    /**
     * footer css styles
     */
    footerStyles?: React.CSSProperties;
    /**
     * z-index css styles
     */
    zIndex?: number;
    /**
     * change callback
     */
    onChange?: (openState: boolean) => void;
    /**
     * transition end callback
     */
    afterVisibleChange?: (openState: boolean) => void;
    /**
     * close click function
     */
    onClose?: (
        e?:
            | React.MouseEvent<Element, MouseEvent>
            | React.KeyboardEvent<Element>,
    ) => void;
    /**
     * Whether support press esc to close
     */
    keyboard?: boolean;
    /**
     * Whether to unmount child components on closing drawer or not
     */
    destroyOnClose?: boolean;
    onOk?: () => void;
    okText?: string;
    okButtonProps?: ButtonProps;
    onCancel?: () => void;
    cancelText?: string;
    cancelButtonProps?: ButtonProps;
    children?: React.ReactNode;
}

const defaultPushState: PushState = { distance: 180 };
const Drawer = forwardRef<DrawerRef, DrawerProps>(
    (
        {
            width = 700,
            isOpen,
            defaultOpen = false,
            placement = 'right',
            showMask = true,
            maskClosable = true,
            keyboard = true,
            destroyOnClose = false,
            push = defaultPushState,
            style,
            bodyStyles,
            footerStyles,
            zIndex,
            isClosable = true,
            title,
            footer,
            onChange,
            afterVisibleChange,
            onClose,
            onOk,
            okText = 'Submit',
            okButtonProps,
            onCancel,
            cancelText = 'Cancel',
            cancelButtonProps,
            children,
            ...rest
        },
        ref,
    ) => {
        const [internalPush, setPush] = useState(false);
        const parentDrawer = useContext(DrawerContext);
        const forceUpdate = useForceUpdate();
        const destroyClose = useRef<boolean>(false);
        const isDestroyOnClose = destroyOnClose && !isOpen;

        useEffect(() => {
            if (isOpen && parentDrawer) {
                parentDrawer.push();
            }

            return () => {
                if (parentDrawer) {
                    parentDrawer.pull();
                }
            };
        }, []);

        useEffect(() => {
            if (parentDrawer) {
                if (isOpen) {
                    parentDrawer.push();
                } else {
                    parentDrawer.pull();
                }
            }
        }, [isOpen]);

        const onDestroyTransitionEnd = () => {
            if (!isDestroyOnClose) {
                return;
            }
            if (!isOpen) {
                destroyClose.current = true;
                forceUpdate();
            }
        };

        const operations = useMemo(
            () => ({
                push() {
                    if (push) {
                        setPush(true);
                    }
                },
                pull() {
                    if (push) {
                        setPush(false);
                    }
                },
            }),
            [push],
        );

        useImperativeHandle(ref, () => operations, [operations]);

        const closeIconNode = isClosable && (
            <Button
                size="small"
                fab
                variant="text"
                color="grey"
                type="button"
                onClick={onClose}>
                <Icon icon="times" size="lg" />
            </Button>
        );

        const renderHeader = () => {
            if (!title && !isClosable) {
                return null;
            }

            return (
                <Header>
                    <Space
                        inline={false}
                        justify="space-between"
                        align="center">
                        <Heading as="h6">{title}</Heading>
                        {closeIconNode}
                    </Space>
                </Header>
            );
        };

        const renderFooter = () => {
            if (!footer && !onOk && !onClose) {
                return null;
            }

            return (
                <Footer style={footerStyles}>
                    <div>{footer}</div>
                    <Space>
                        {onCancel && (
                            <Button
                                variant="outlined"
                                color="error"
                                size="small"
                                onClick={() => {
                                    onClose?.();
                                    onCancel?.();
                                }}
                                {...cancelButtonProps}>
                                {cancelText}
                            </Button>
                        )}
                        {onOk && (
                            <Button
                                size="small"
                                onClick={() => {
                                    onOk?.();
                                }}
                                {...okButtonProps}>
                                {okText}
                            </Button>
                        )}
                    </Space>
                </Footer>
            );
        };

        const renderBody = () => {
            if (destroyClose.current && !isOpen) {
                return null;
            }
            destroyClose.current = false;
            return (
                <Container
                    isDestroyOnClose={isDestroyOnClose}
                    onTransitionEnd={onDestroyTransitionEnd}>
                    {renderHeader()}
                    <Body style={bodyStyles}>{children}</Body>
                    {renderFooter()}
                </Container>
            );
        };

        return (
            <DrawerContext.Provider value={operations}>
                <RcDrawer
                    defaultOpen={defaultOpen}
                    showMask={showMask}
                    maskClosable={maskClosable}
                    placement={placement}
                    width={width}
                    onChange={onChange}
                    afterVisibleChange={afterVisibleChange}
                    onClose={onClose}
                    keyboard={keyboard}
                    open={isOpen}
                    handler={false}
                    level={null}
                    style={getDrawerStyles({
                        zIndex,
                        internalPush,
                        placement,
                        style,
                        push,
                        defaultPushState,
                    })}
                    {...rest}>
                    {renderBody()}
                </RcDrawer>
            </DrawerContext.Provider>
        );
    },
);

Drawer.displayName = 'Drawer';

const DrawerWrapper: React.FC<DrawerProps> = forwardRef<DrawerRef, DrawerProps>(
    (props, ref) => <Drawer {...props} ref={ref} />,
);

DrawerWrapper.displayName = 'DrawerWrapper';

export default DrawerWrapper;
