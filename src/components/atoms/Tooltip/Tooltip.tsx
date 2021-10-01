import React from 'react';
import RcTooltip from 'rc-tooltip';
import { TooltipProps as RcTooltipProps } from 'rc-tooltip/es/Tooltip';
import 'rc-tooltip/assets/bootstrap.css';

export type TooltipProps = RcTooltipProps;

const Tooltip = ({ children, ...rest }: TooltipProps) => (
    <RcTooltip transitionName="rc-tooltip-zoom" destroyTooltipOnHide {...rest}>
        {children}
    </RcTooltip>
);

export default Tooltip;
