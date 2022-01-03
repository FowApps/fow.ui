import React from 'react';
import styled from 'styled-components';
import RcTooltip from 'rc-tooltip';
import { TooltipProps as RcTooltipProps } from 'rc-tooltip/es/Tooltip';
import 'rc-tooltip/assets/bootstrap.css';

export type TooltipProps = RcTooltipProps;

const Wrapper = styled.div`
    display: inline-block;
    cursor: pointer;
`;

const Tooltip = ({ children, ...rest }: TooltipProps) => (
    <RcTooltip
        mouseEnterDelay={0.5}
        transitionName="rc-tooltip-zoom"
        destroyTooltipOnHide
        {...rest}>
        <Wrapper>{children}</Wrapper>
    </RcTooltip>
);

export default Tooltip;
