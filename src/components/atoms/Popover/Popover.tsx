import React from 'react';
import { TooltipProps as RcTooltipProps } from 'rc-tooltip/es/Tooltip';
import Tooltip from '../Tooltip';

import { PopoverStyles } from './styles';

type RenderFunction = () => React.ReactNode;

export interface PopoverProps extends Omit<RcTooltipProps, 'overlay'> {
    title?: React.ReactNode | RenderFunction;
    content?: React.ReactNode | RenderFunction;
}

const getRenderPropValue = (
    propValue?: React.ReactNode | RenderFunction,
): React.ReactNode => {
    if (!propValue) {
        return null;
    }

    const isRenderFunction = typeof propValue === 'function';
    if (isRenderFunction) {
        return (propValue as RenderFunction)();
    }

    return propValue;
};

const Popover = React.forwardRef<unknown, PopoverProps>(
    ({ title, content, ...rest }, ref) => {
        const getOverlay = () => (
            <>
                {title && <div>{title}</div>}
                <div>{getRenderPropValue(content)}</div>
            </>
        );

        return (
            <>
                <PopoverStyles />
                <Tooltip
                    {...rest}
                    // @ts-ignore
                    ref={ref as any}
                    overlay={getOverlay()}
                    overlayClassName="popover"
                />
            </>
        );
    },
);

export default Popover;
