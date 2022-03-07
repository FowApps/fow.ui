import { withTheme } from 'styled-components';
import React from 'react';
import 'rc-dialog/assets/index.css';
import Dialog from 'rc-dialog';

export interface ModalProps {
    /**
     * additional className for dialog
     */
    className?: string;
    /**
     * whether support press esc to close
     */
    keyboard?: boolean;
    /**
     * Root style for dialog element.Such as width, height
     */
    style: React.CSSProperties;
    /**
     * whether show mask
     */
    mask?: boolean;
    /**
     * called when close animation end
     */
    afterClose?: () => void;
    /**
     * called when click close button or mask
     */
    onClose?: () => void;
    /**
     * whether show close button
     */
    closable?: boolean;
    /**
     * whether click mask to close
     */
    maskClosable?: boolean;
    /**
     * current dialog's visible status
     */
    visible?: boolean;
    /**
     * to unmount child compenents on onClose
     */
    destroyOnClose?: boolean;
    /**
     * set pageX and pageY of current mouse(it will cause transform origin to be set).
     */
    mousePosition?: {
        x: number;
        y: number;
    } | null;
    /**
     * Title of the dialog
     */
    title?: string;
    /**
     * footer of the dialog
     */
    footer?: React.ReactNode;
    /**
     * dialog animation css class name
     */
    transitionName?: string;
    /**
     * mask animation css class name
     */
    maskTransitionName?: string;
    /**
     * part of dialog animation css class name
     */
    animation?: any;
    /**
     * part of dialog's mask animation css class name
     */
    maskAnimation?: any;
    /**
     * ///////////////////////////////////////////////////
     */
    wrapStyle?: Record<string, any>;
    /**
     * body style for dialog body element.Such as height
     */
    bodyStyle?: Record<string, any>;
    /**
     * style for mask element
     */
    maskStyle?: Record<string, any>;
    /**
     * The dialog dom node's prefixCls
     */
    prefixCls?: string;
    /**
     * ///////////////////////////////////////////////////
     */
    wrapClassName?: string;
    /**
     * set width of component
     */
    width?: string | number;
    /**
     * set height of component
     */
    height?: string | number;
    /**
     * set z-index of component
     */
    zIndex?: number;
    /**
     * set body props to be added to the body
     */
    bodyProps?: any;
    /**
     * set mask props to be added to the mask
     */
    maskProps?: any;
    /**
     * set wrap props to be added to the wrap
     */
    wrapProps?: any;
    /**
     * to determine where Dialog will be mounted
     */
    getContainer?: string | HTMLElement | (() => HTMLElement) | false;
    /**
     * specific the close icon.
     */
    closeIcon?: React.ReactNode;
    /**
     * Custom modal content render
     */
    modalRender?: (node: React.ReactNode) => React.ReactNode;
    /**
     * Create dialog dom node before dialog first show
     */
    forceRender?: boolean;
    /**
     * focus trigger element when dialog closed
     */
    focusTriggerAfterClose?: boolean;
}

const Modal: React.FC<ModalProps> = ({
    title,
    visible,
    onClose,
    mousePosition,
    closeIcon,
    style,
    footer,
    animation,
    children,
    className,
    keyboard,
    mask,
    afterClose,
    closable,
    maskClosable,
    destroyOnClose,
    transitionName,
    maskTransitionName,
    maskAnimation,
    wrapStyle,
    bodyStyle,
    maskStyle,
    prefixCls,
    wrapClassName,
    width,
    height,
    zIndex,
    bodyProps,
    maskProps,
    wrapProps,
    getContainer,
    modalRender,
    forceRender,
    focusTriggerAfterClose,
}) => (
    <Dialog
        visible={visible}
        animation={animation || 'zoom'}
        maskAnimation={maskAnimation || 'fade'}
        onClose={onClose}
        style={{
            width: 600,
            ...style,
        }}
        title={title || false}
        closeIcon={closeIcon}
        mousePosition={mousePosition}
        focusTriggerAfterClose={focusTriggerAfterClose || false}
        footer={footer}
        className={className}
        keyboard={keyboard}
        mask={mask}
        afterClose={afterClose}
        closable={closable}
        maskClosable={maskClosable}
        destroyOnClose={destroyOnClose}
        transitionName={transitionName}
        maskTransitionName={maskTransitionName}
        wrapStyle={wrapStyle}
        bodyStyle={bodyStyle}
        maskStyle={maskStyle}
        prefixCls={prefixCls}
        wrapClassName={wrapClassName}
        width={width}
        height={height}
        zIndex={zIndex}
        bodyProps={bodyProps}
        maskProps={maskProps}
        wrapProps={wrapProps}
        getContainer={getContainer}
        modalRender={modalRender}
        forceRender={forceRender}>
        {children}
    </Dialog>
);
export default withTheme(Modal);
